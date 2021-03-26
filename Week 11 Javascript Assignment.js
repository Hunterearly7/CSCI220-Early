$(function () {
        var $NewTaskButton = $('NewTaskButton');
        var $NewTaskForm = $('NewTaskForm');
        var $textInput = $('input:text');


        $NewTaskButton.show();
        $NewTaskForm.hide();


        $('#displaytask').on('click', function () {
            $NewTaskButton.hide();
            $NewTaskButton.show();
        });



        $NewTaskForm.on('submit', function(e){
                e.preventDefault();
                var newText = $textInput.val();
                $('list_item').after('<li>' + newText + '</li>');
                $NewTaskForm.hide();
                $NewTaskButton.show();
                $textInput.val('');
            });

            


    });
