const skills = document.getElementsByClassName( "skill__list__img" );

const overImage = ( event ) => {
    let img = event.currentTarget;
    img.nextSibling.nextSibling.style.visibility = "visible";
}

const outImage = ( event ) => {
    let img = event.currentTarget;
    img.nextSibling.nextSibling.style.visibility = "hidden";    
}

const init = () => {
    for( let skill of skills )
    {
        skill.addEventListener( "mouseover", overImage );
        skill.addEventListener( "mouseout", outImage );
    }
}

init();