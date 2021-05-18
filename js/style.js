/*
 * @Author: A
 * @Date:   2021-05-18 15:52:47
 * @Last Modified by:   A
 * @Last Modified time: 2021-05-18 16:55:34
 */
$(function() {
    $('input, select').on('change', function(event) {
        var $element = $(event.target),
            $container = $element.closest('.example');

        if (!$element.data('tagsinput'))
            return;

        var val = $element.val();
        console.log(val)

        if (val === null)
            val = "null";
        $('code', $('pre.val', $container)).html(($.isArray(val) ? JSON.stringify(val) : "\"" + val.replace('"', '\\"') + "\""));
        $('code', $('pre.items', $container)).html(JSON.stringify($element.tagsinput('items')));
    }).trigger('change');



    // 选择分类
    $(document).on('click', '#categories', function(event) {
        event.preventDefault();
        /* Act on the event */

    });
});