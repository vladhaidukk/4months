$(document).ready(function() {
    $(".content__step").hide();

    // Add background color to all steps
    const firstColor = "#e3b8fa";
    const secondColor = "#d3bdff";
    const thirdColor = "#a6b7fc";
    const fourthColor = "#bedcfa";

    let currentColor = firstColor;
    for (let i = 0; i < 28; i++) {
        $(".content__step--" + i).css("backgroundColor", currentColor);

        if (currentColor == firstColor) {
            currentColor = secondColor;
        } else if (currentColor == secondColor) {
            currentColor = thirdColor;
        } else if (currentColor == thirdColor) {
            currentColor = fourthColor;
        } else if (currentColor == fourthColor) {
            currentColor = firstColor;
        }
    }

    // Move from INTRO to the next step
    $(".intro__title").click(function() {
        $(".intro").fadeOut(1500);
        $(".content").slideDown(1200);
        $(".content__step--26").show();
    });

    // Move forward on CONTENT
    $(".step__next-btn").each(function(index) {
        $(".next-btn--" + index).click(function() {
            let nextIndex = index + 1;
            $(".content__step--" + index).fadeOut(1000);
            if (nextIndex == 28) {
                $(".content__step--" + nextIndex).fadeIn(1300);
            } else {
                $(".content__step--" + nextIndex).slideDown(1300);
            }
        });
    });
});