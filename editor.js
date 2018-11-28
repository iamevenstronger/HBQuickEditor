var beautify = ace.require("ace/ext/beautify");
var html_editor = ace.edit("editor");
html_editor.setTheme("ace/theme/xcode");
html_editor.session.setMode("ace/mode/html");
html_editor.session.setNewLineMode("unix");
html_editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});
var getHTMLContent = function () { return html_editor.getValue().replace(/[\t\n\r]/gm, ''); }
var setHTMLContent = function (content) { html_editor.setValue(content); }
var setTheme = function (id, sid) { var theme = document.getElementById(sid).value; ace.edit(id).setTheme("ace/theme/" + theme); }
var beautifyHTML = function () { beautify.beautify(html_editor.session); }
var setPreview = function (content) {
    document.getElementById('preview').src = "data:text/html;charset=utf-8," + escape(content);
}
var generatePreviewContent = function () {
    var html = getHTMLContent();
    setPreview(html);
}
var getQueryStringValue = function(key) {  
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
} 
html_editor.getSession().on('change', function () {
    generatePreviewContent();
    localStorage.setItem(queryparamname, getHTMLContent());
});
var queryparamname = getQueryStringValue("name") ;
document.getElementById("tabname").innerText = queryparamname ;
if(typeof localStorage[queryparamname] != "undefined") {
    setHTMLContent(localStorage[queryparamname]);
    generatePreviewContent();
    setTimeout(function(){
        beautifyHTML();
    },500);
}

