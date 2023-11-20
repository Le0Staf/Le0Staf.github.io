//-------------------------------------------------File Explorer-------------------------------------------------//


function changeImgOnHover() {
    var closeImg = document.querySelector("#file-explorer-menu-close img");

    closeImg.src = "closewhite.png";
}

function restoreImgOnHoverOut() {
    var closeImg = document.querySelector("#file-explorer-menu-close img");

    closeImg.src = "close.png";
}

var fileExplorerClose = document.querySelector("#file-explorer-menu-close");
fileExplorerClose.addEventListener("mouseover", changeImgOnHover);
fileExplorerClose.addEventListener("mouseout", restoreImgOnHoverOut);


function CloseFileExplorer() {
        document.getElementById("file-explorer-menu").classList.toggle("visible");
}

function OpenFileExplorer() {
    if (!document.getElementById("file-explorer-menu").classList.contains("visible")) {
        document.getElementById("file-explorer-menu").classList.toggle("visible");
    }
}

let fileExplorerIsMaximized = 0;

function MaximizeFileExplorer() {
    if (fileExplorerIsMaximized == 0) {
        document.getElementById("file-explorer-menu").style.top = "0";
        document.getElementById("file-explorer-menu").style.left = "0";
        document.getElementById("file-explorer-menu").style.width = "100%";
        document.getElementById("file-explorer-menu").style.height = "100%";
        document.getElementById("file-explorer-menu-header").style.height = "2.8%";
        document.getElementById("file-explorer-menu-minimize").style.width = "2.7vw";
        document.getElementById("file-explorer-menu-fullscreen").style.width = "2.7vw";
        document.getElementById("file-explorer-menu-close").style.width = "2.7vw";
        document.getElementById("left-file-explorer-nav").style.width = "50%";

        fileExplorerIsMaximized = 1;
    }
    else if (fileExplorerIsMaximized == 1) {
        console.log(fileExplorerIsMaximized);
        document.getElementById("file-explorer-menu").style.top = "15%";
        document.getElementById("file-explorer-menu").style.left = "23%";
        document.getElementById("file-explorer-menu").style.width = "52%";
        document.getElementById("file-explorer-menu").style.height = "55%";
        document.getElementById("file-explorer-menu-header").style.height = "5%";
        document.getElementById("file-explorer-menu-minimize").style.width = "2.7vw";
        document.getElementById("file-explorer-menu-fullscreen").style.width = "2.7vw";
        document.getElementById("file-explorer-menu-close").style.width = "2.7vw";
        document.getElementById("left-file-explorer-nav").style.width = "50%";

        fileExplorerIsMaximized = 0;
    }

}