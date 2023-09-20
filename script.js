const buttons = document.getElementsByTagName("a");

for (let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", () => {
        alert("Button was clicked");
    });
}