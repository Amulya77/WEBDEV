const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    console.log("clicked")
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
        console.log("clicked")
    })
})

function removeActiveClasses() {
    console.log("removed")
    panels.forEach(panel => {
        panel.classList.remove('active')
        
    })
}