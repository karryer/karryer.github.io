
var gitalk = new Gitalk({
    clientID: '7aa5f973fdce362ce388',
    clientSecret: '55f8d6962f040539dca3ca97c4a7c0341df997e7',
    repo: 'karryer.github.io',
    owner: 'karryer',
    admin: ['karryer'],
    id: location.pathname,
    distractionFreeMode: false,
});
gitalk.render('gitalk-container');

// Hide h1
var h1 = document.getElementsByTagName('h1')[0];
if (h1 != null) {
    h1.parentNode.removeChild(h1);
}

// Set title
function setTitle(title) {
    var titleElement = document.getElementsByTagName('title')[0];
    if (titleElement != null) {
        titleElement.text = title;
    }
}

