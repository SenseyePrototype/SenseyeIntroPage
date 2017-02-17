$(document).ready(function () {
    function addSkill(text) {
        var template = $('#js-skill-template').html();

        var $skill = $(template);

        $skill.find('.js-name').html(text);

        $('.js-skill-list').prepend($skill);
    }

    var skills = {
        "CSS": null,
        "HTML": null,
        "Jira": null,
        "Laravel": null,
        "Git": 'https://git-scm.com/images/logos/downloads/Git-Icon-Black.png'
    };

    var $complete = $('input.autocomplete');

    $complete.autocomplete({
        data: skills,
        limit: 20,
        onAutocomplete: function (text) {
            addSkill(text);
            $complete.val('');
        }
    });

    $('.js-add-skill').click(function () {
        var text = $complete.val();

        if (skills.hasOwnProperty(text)) {
            addSkill(text);
            $complete.val('');
        }
    });

    $('.js-skill-list').on('click', '.js-delete', function () {
        $(this).closest('.js-skill').remove();
    });

    $('.js-skill-list').on('click', '.point', function () {
        var $point = $(this);

        $point.nextAll().removeClass('active');
        $point.prevAll().addClass('active');
        $point.addClass('active');
    });

    $('.js-skill-list').sortable({
        update: function (event, ui) {
            console.log(ui.item.find('.s2').html());
        }
    });
});