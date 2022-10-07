const Accordion= ({children,title,heading})=>{
<div className="accordion" id="accordianHooks">
    <div className="accordian-item">
        <h2 className="accordian-header" id={heading}>
            <button className="accordion-button collapsed"
             type="button"
             data-bs-toggle="collapse"
             data-bs-expanded="true"
             aria-controls={`collapse${heading}`}
             style={{fontFamily:"vazir"}}>{title}</button>
        </h2>
        <div id={`collapse${heading}`}
             className="accordion-collapse collapse"
             aria-labelledby={heading}
             dats-bs-parent="#according Hooks">
                <div className="according-body">{children}</div>
             </div>
    </div>
</div>
}
export default Accordion;