/**
 * Behavior for expanding/collapsing feedback block.
 */
Drupal.behaviors.DSFeedback = function(context) {

  $('#block-boxes-ds_feedback:not(.ds-feedback-processed)').each(function() {
    $(this).addClass('ds-feedback-processed');
    $('.block-title', this).click(function() {
      var block = $(this).parents('div.block');
      if (!$(block).is('.ds-feedback-active')) {
        $('.block-content', block).slideDown('fast');
        $(block).addClass('ds-feedback-active');
      }
      else {
        $(block).removeClass('ds-feedback-active');
        $('.block-content', block).slideUp('fast');
      }
    });
  });

}