/* ------------------------------------------------------------------------------
 *
 *  # Draggable cards
 *
 *  Demo JS code for content_cards_draggable.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var CardsDraggable = function() {


    //
    // Setup module components
    //

    // jQuery UI Sortable
    var _componentSortable = function() {
        if (!$().sortable) {
            console.warn('Warning - jquery_ui.js components are not loaded.');
            return;
        }

     

        // Sortable column
        $('.column-card-sortable').sortable({
            connectWith: '.column-sortable',
            items: '.col-xl-3:not(.skip-card)',
            helper: 'original',
            cursor: 'all-scroll',
            handle: '[data-action=custom-move]',
            revert: 100,
            containment: '.content-wrapper',
            forceHelperSize: true,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            
            
            start: function(e, ui){
                ui.placeholder.height(ui.item.outerHeight());
                console.log(e.target)
            },
            

        });
        $('.sortable-card').sortable({
            connectWith: '.card-sortable',
            items: '[data-action=custom-move-panel]',
            helper: 'original',
            cursor: 'move',
            revert: 100,
            containment: '.content-wrapper',
            forceHelperSize: true,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: true,
            tolerance: 'pointer',
            start: function(e, ui){
                ui.placeholder.height(ui.item.outerHeight());
            }
        });
        

       
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentSortable();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    CardsDraggable.init();
});
