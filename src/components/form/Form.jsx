import React from "react";

const Form = () => {
  return (
    <div>
      <div>
        <div class="general-container w-container">
          <div class="stayintouch-block">
            <div class="w-form">
              <label for="email" class="stayintouch-label">
                Stay in touch
              </label>

              <div>
                <div id="block-webform-2" class="block-webform block-webform-2">
                  <a
                    id="webform-submission-home-subscribe-form-ajax-content"
                    tabindex="-1"
                    aria-hidden="true"></a>
                  <div
                    id="webform-submission-home-subscribe-form-ajax"
                    class="webform-ajax-form-wrapper"
                    data-effect="none"
                    data-progress-type="throbber">
                    <form
                      class="webform-submission-form webform-submission-add-form webform-submission-home-subscribe-form webform-submission-home-subscribe-add-form js-webform-details-toggle webform-details-toggle"
                      data-drupal-selector="webform-submission-home-subscribe-add-form"
                      action="/"
                      method="post"
                      id="webform-submission-home-subscribe-add-form"
                      accept-charset="UTF-8">
                      <div
                        class="webform-elements"
                        data-drupal-selector="edit-elements">
                        <div
                          data-drupal-selector="edit-flexbox-02"
                          class="webform-flexbox js-webform-flexbox js-form-wrapper form-wrapper"
                          id="edit-flexbox-02"></div>

                        <div class="js-form-item form-item js-form-type-email form-item-email1 js-form-item-email1">
                          <label
                            for="edit-email1"
                            class="js-form-required form-required">
                            Email
                          </label>

                          <input
                            data-drupal-selector="edit-email1"
                            data-msg-email="Email does not contain a valid email."
                            data-msg-maxlength="Email field has a maximum length of 254."
                            data-msg-required="Email field is required."
                            type="email"
                            id="edit-email1"
                            name="email1"
                            value=""
                            size="60"
                            maxlength="254"
                            class="form-email required"
                            required="required"
                            aria-required="true"
                          />
                        </div>

                        <div
                          data-drupal-selector="edit-flexbox"
                          class="webform-flexbox js-webform-flexbox js-form-wrapper form-wrapper"
                          id="edit-flexbox">
                          <div class="webform-flex webform-flex--1">
                            <div class="webform-flex--container">
                              <div class="js-form-wrapper">
                                <div
                                  data-drupal-selector="edit-captcha"
                                  class="captcha">
                                  <input
                                    data-drupal-selector="edit-captcha-sid"
                                    type="hidden"
                                    name="captcha_sid"
                                    value="525333"
                                  />

                                  <input
                                    data-drupal-selector="edit-captcha-token"
                                    type="hidden"
                                    name="captcha_token"
                                    value="yHNqS03z-LFw2L6Y4JSUS17MwTq_iD6tcr1RUL6uasQ"
                                  />
                                  <img
                                    data-drupal-selector="edit-captcha-image"
                                    src="/images/525315/capcha.jpg"
                                    width="216"
                                    height="60"
                                    alt="Image CAPTCHA"
                                    title="Image CAPTCHA"
                                    typeof="foaf:Image"
                                  />

                                  <div class="js-form-item form-item js-form-type-textfield form-item-captcha-response js-form-item-captcha-response">
                                    <label
                                      for="edit-captcha-response"
                                      class="js-form-required form-required">
                                      What code is in the image?
                                    </label>

                                    <input
                                      autocomplete="off"
                                      data-drupal-selector="edit-captcha-response"
                                      aria-describedby="edit-captcha-response--description"
                                      data-msg-maxlength="What code is in the image? field has a maximum length of 128."
                                      data-msg-required="What code is in the image? field is required."
                                      type="text"
                                      id="edit-captcha-response"
                                      name="captcha_response"
                                      value=""
                                      size="15"
                                      maxlength="128"
                                      class="form-text required"
                                      required="required"
                                      aria-required="true"
                                    />

                                    <div
                                      id="edit-captcha-response--description"
                                      class="description">
                                      Enter the characters shown in the image.
                                    </div>
                                  </div>

                                  <div class="reload-captcha-wrapper">
                                    <a
                                      href="/image-captcha-refresh/webform_submission_home_subscribe_add_form"
                                      class="reload-captcha">
                                      Get new captcha!
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          data-drupal-selector="edit-flexbox-01"
                          class="webform-flexbox js-webform-flexbox js-form-wrapper form-wrapper"
                          id="edit-flexbox-01">
                          <div class="webform-flex webform-flex--1">
                            <div class="webform-flex--container">
                              <div
                                data-drupal-selector="edit-actions"
                                class="form-actions webform-actions js-form-wrapper form-wrapper"
                                id="edit-actions">
                                <input
                                  class="webform-button--submit primary-cta two-buttons w-inline-block button button--primary js-form-submit form-submit"
                                  data-drupal-selector="edit-actions-submit"
                                  data-disable-refocus="true"
                                  type="submit"
                                  id="edit-actions-submit"
                                  name="op"
                                  value="Submit"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <input
                        autocomplete="off"
                        data-drupal-selector="form-g7-blhn-w-rizrj3wvbrg-q13r8154akmcx-0pa-xcs"
                        type="hidden"
                        name="form_build_id"
                        value="form-G7-Blhn-W-RiZrj3WVbRg_q13R8154Akmcx_0pA_XCs"
                      />

                      <input
                        data-drupal-selector="edit-webform-submission-home-subscribe-add-form"
                        type="hidden"
                        name="form_id"
                        value="webform_submission_home_subscribe_add_form"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
