/*
 * @Author: A
 * @Date:   2021-05-18 15:52:47
 * @Last Modified by:   A
 * @Last Modified time: 2021-05-19 15:29:23
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


    var bOff = true;
    // 选择分类 show
    $(document).on('click', '.hui-wrap', function(event) {
        event.preventDefault();
        event.stopPropagation();    //  阻止事件冒泡
        /* Act on the event */
        if (bOff) {
            $('.hui-nav').addClass('hui-nav-show');
            bOff = false
        }
    });

    //选择分类 hide
    $(document).on('click','body',function(event) {
        // event.preventDefault();
        // console.log(bOff)
        if (!bOff) {
            $('.hui-nav').removeClass('hui-nav-show');
            bOff = true;
        }
    });

    $(document).on('click', '.hui-tab-content .btn', function(event) {
        event.preventDefault();
        var typeTxt= $(this).html();
        console.log(typeTxt)
        $('#categories').val(typeTxt)
    });
});