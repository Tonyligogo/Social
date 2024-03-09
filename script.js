//navigation
const items = document.querySelectorAll(".item");

///messages
const messageNotification = document.querySelector("#message-notification");
const messages = document.querySelector(".messagetab");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#messageSearch");

//theme
const theme = document.querySelector(".theme");
const themeModal = document.querySelector(".themeCustomization");

///remove active class from all menu items
const changeActiveItem = () => {
    items.forEach((item) => {
        item.classList.remove("active");
    });
};

items.forEach((item) => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");
        if (item.id != "notifications") {
            document.querySelector(".notifications-popup").style.display = "none";
        } else {
            document.querySelector(".notifications-popup").style.display = "block";
            document.querySelector(
                "#notifications .notification-count"
            ).style.display = "none";
        }
    });
});

messageNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--colorPrimary)";
    messageNotification.querySelector(".notification-count").style.display =
        "none";
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000);
});
//search bar

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach((chat) => {
        let name = chat.querySelector("h4").textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = "flex";
        } else {
            chat.style.display = "none";
        }
    });
};
messageSearch.addEventListener("keyup", searchMessage);

// theme customization
///opens modal
const openthemeModal = () => {
    themeModal.style.display = "grid";
};

const closethemeModal = (e) => {
    if (e.target.classList.contains("themeCustomization")) {
        themeModal.style.display = "none";
    }
};

//close modal
themeModal.addEventListener("click", closethemeModal);

theme.addEventListener("click", openthemeModal);