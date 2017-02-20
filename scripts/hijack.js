function disableLinks() {
    document.addEventListener('click', function(event) {
        event.preventDefault();
    });
}
disableLinks();
