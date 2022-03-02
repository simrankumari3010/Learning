class MyHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
        <nav class="navbar navbar-light bg-dark">
        <h1 class="bg-light">Learning</h1>
<div class=" list-group w-50 mx-auto list-group-horizontal ">
    <div class="list-group-item bg-light">
    <a href="index.html" class="list-group-item-action ">Home</a>
</div>
<div class="list-group-item bg-danger">
    <a href="edu.html" class="list-group-item-action list-group-item-horizontal ">Education</a>
</div>
<div class="list-group-item bg-black">
    <a href="fee.html" class="list-group-item-action list-group-item-horizontal">Fee Structure</a>
</div>

<div class="list-group-item bg-success">
    <a href="thought.html" class="list-group-item-action list-group-item-horizontal">Thoughts</a>
</div>
<div class="list-group-item bg-danger">
    <a href="about.html" class="list-group-item-action list-group-item-horizontal">About Us</a>
</div>
    
</div></nav>
        `
    }
}
customElements.define('my-header',MyHeader)

class MyFooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
            copyright@pranvicomputech.com
        `
    }
}
customElements.define('my-footer',MyFooter)