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

   
    $num_popup = $form_state->get('num_popup');
    if ($num_popup === NULL) {
      $name_field = $form_state->set('num_popup', 1);
      $num_popup = 1;
    }

    $form['#tree'] = TRUE;

    $form['popup_fieldset'] = [
      '#type' => 'fieldset',
      '#title' => $this->t('Movie Popup'),
      '#prefix' => '<div id="popup-fieldset-wrapper">',
      '#suffix' => '</div>',
    ];
    
    for ($i = 0; $i < $num_popup; $i++) {
      $form['popup_fieldset']['title'][$i] = [
        '#type' => 'textfield',
        '#title' => $this->t('Title'),
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
      '#value' => $this->t('Add more popups'),
      '#submit' => ['::addOne'],
      '#ajax' => [
        'callback' => '::addmoreCallback',
        'wrapper' => 'popup-fieldset-wrapper',
      ],
    ];

    if ($num_popup > 1) {
      $form['popup_fieldset']['actions']['remove_name'] = [
        '#type' => 'submit',
        '#value' => $this->t('Remove one popups'),
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
    $name_field = $form_state->get('num_popup');
    $add_button = $name_field + 1;
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
    $name_field = $form_state->get('num_popup');
    if ($name_field > 1) {
      $remove_button = $name_field - 1;
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
    $values = $form_state->getValue(['popupfieldset', 'name']);

    $output = $this->t('Movie Popup', [
      '@names' => implode(', ', $values),
    ]
    );
    $this->messenger()->addMessage($output);

   // parent::submitForm($form, $form_state);
  }
}
