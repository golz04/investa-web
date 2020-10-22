$(".textbox input").on("focus", function()
{
    $(this).addClass("focus");
});
$(".textbox input").on("blur", function()
{
    if($(this).val() == "")
    {
        $(this).removeClass("focus");
    }
});