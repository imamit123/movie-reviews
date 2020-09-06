<?php

/**
 * @file
 * Contains Drupal\movie_review\Form\HomepagePopupSettings.
 */
namespace Drupal\movie_review\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

class HomepagePopupSettings extends ConfigFormBase {
  /**
   *
   * {@inheritdoc}
   *
   */
  public function getFormId() {
    return 'homepagepopup_settings';
  }

  /**
   *
   * {@inheritdoc}
   *
   */
  protected function getEditableConfigNames() {
    return [
      'movie_review.popup_settings'
    ];
  }

  /**
   *
   * {@inheritdoc}
   *
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('movie_review.popup_settings');
    $form['description'] = [
      '#type' => 'item',
      '#markup' => $this->t('Movie Popup.'),
    ];

   
    $num_popup = $config->get('num_popup'); 
    if ($num_popup === NULL) {
      $name_field = $config->set('num_popup', 1);
      $num_popup = 1;
    }

    $form['#tree'] = TRUE;
    $form['popup_fieldset'] = [
      '#type' => 'fieldset',
      '#title' => $this->t('Movie Popup'),
      '#prefix' => '<div id="popup-fieldset-wrapper">',
      '#suffix' => '</div>',
    ];

    $form_state->set('num_popup', $num_popup);
    for ($i = 0; $i < $num_popup; $i++) {
      $form['popup_fieldset']['title'][$i] = [
        '#type' => 'textfield',
        '#title' => $this->t('Title'),
        '#default_value' => $config->get('popup_title_' . $i),
      ];
      $form['popup_fieldset']['body'][$i] = [
        '#type' => 'textarea',
        '#title' => $this->t('Body'),
        '#default_value' => $config->get('popup_body_' . $i),
      ];
      $form['popup_fieldset']['body'][$i] = [
        '#type' => 'textarea',
        '#title' => $this->t('Body'),
      ];
    }

    $form['popup_fieldset']['actions'] = [
      '#type' => 'actions',
    ];
    $form['popup_fieldset']['actions']['add_name'] = [
      '#type' => 'submit',
      '#value' => $this->t('Add one more'),
      '#submit' => ['::addOne'],
      '#ajax' => [
        'callback' => '::addmoreCallback',
        'wrapper' => 'popup-fieldset-wrapper',
      ],
    ];

    if ($num_popup > 1) {
      $form['popup_fieldset']['actions']['remove_name'] = [
        '#type' => 'submit',
        '#value' => $this->t('Remove one'),
        '#submit' => ['::removeCallback'],
        '#ajax' => [
          'callback' => '::addmoreCallback',
          'wrapper' => 'popup-fieldset-wrapper',
        ],
      ];
    }
    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Submit'),
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * Callback for both ajax-enabled buttons.
   *
   * Selects and returns the fieldset with the names in it.
   */
  public function addmoreCallback(array &$form, FormStateInterface $form_state) {
    return $form['popup_fieldset'];
  }
  /**
   * Submit handler for the "add-one-more" button.
   *
   * Increments the max counter and causes a rebuild.
   */
  public function addOne(array &$form, FormStateInterface $form_state) {
    $config = $this->config('movie_review.popup_settings');
    $name_field = $config->get('num_popup');
    $add_button = $name_field + 1;
    $config->set('num_popup', $add_button);
    $form_state->set('num_popup', $add_button);
    $form_state->setRebuild();
  }

  /**
   * Submit handler for the "remove one" button.
   *
   * Decrements the max counter and causes a form rebuild.
   */
  public function removeCallback(array &$form, FormStateInterface $form_state) {
    $config = $this->config('movie_review.popup_settings');
    $name_field = $config->get('num_popup');
    if ($name_field > 1) {
      $remove_button = $name_field - 1;
      $config->set('num_popup', $remove_button);
      $form_state->set('num_popup', $remove_button);
    }
    $form_state->setRebuild();
  }

  /**
   *
   * {@inheritdoc}
   *
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $values = $form_state->getValues();
    $storage = $form_state->getStorage();
    $config = $this->config('movie_review.popup_settings');
    $max_levels = $storage['num_popup'];
    $stored_level = $config->get('num_popup');
    $config->set('num_popup', $max_levels);
    for($level = 1; $level <= $max_levels; $level ++) {
    $level_xp = ! empty($values[$level]) && isset($values[$level]) ? $values[$level] : '';
    $config->set('num_popup' . $level, $level_xp);
   }
    $config->save();
    parent::submitForm($form, $form_state);

  }
}
