$(document).ready(function() {
    var itemPriceSelected = 0.1

    function getPriceSelectedItem() {
        itemPriceSelected = $('select').val()
    }

    $('select').on('change', function(event) {
        event.preventDefault()
        getPriceSelectedItem()
    })

    /**************/

    var itemCount = 1

    function minusItem() {
        itemCount = parseInt($('.number-text').val())
        if (itemCount > 1) {
            itemCount = itemCount - 1
        }
        $('.number-text').val(itemCount)
    }

    $('.number-minus').on('click', function(event) {
        event.preventDefault()
        minusItem()
        getResult()
    })

    //

    function plusItem() {
        if (itemCount < 5) {
            itemCount = parseInt($('.number-text').val())
            itemCount = itemCount + 1
            $('.number-text').val(itemCount)
        }
    }

    $('.number-plus').on('click', function(event) {
        event.preventDefault()
        plusItem()
        getResult()
    })

    /************/

    var result

    function getResult() {
        result = (itemPriceSelected * itemCount).toFixed(1)
        $('.result').html(result)
    }

    $('select').on('change', function(event) {
        event.preventDefault()
        getResult()
    })
})