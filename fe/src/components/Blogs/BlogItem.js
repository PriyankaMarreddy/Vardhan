import React, {useState} from 'react'
import Modal from 'react-modal'
Modal.setAppElement('#root')
function BlogItem({title, text, url, src, day, month, author, comments}) {

    const [ModalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <Modal isOpen={ModalIsOpen} onRequestClose={()=>setModalIsOpen(false)} className="popup-content">
                <div className="block-popup">
                    <div className="">
                        <div className="row gx-5 d-flex align-items-center">
                            <div className="col-md-6">
                                <img alt="" src={src} className="img-fluid image"/>
                            </div>
                            <div className="col-md-6">
                                <h4>{title}</h4>
                                <p> Author: <span>{author}</span> /  Comments <span>{comments}</span></p>
                                
                                <p>{text}</p>
                                <p><span>{day}, {month}</span> - applied day</p>
                            </div>
                        </div>
                    </div>                    
                </div>
                <span onClick={()=>setModalIsOpen(false)} className="close-btn"></span>
            </Modal>
            <div className="post-blog">
                <div className="post-image">
                <span onClick={()=>setModalIsOpen(true)} className="ajax-content blog-link">&nbsp;</span>
                    <img alt="" src={src} className="img-fluid image"/>
                </div>
                <div className="date">
                    <p className="day">{day}</p>
                    <p className="month">{month}</p>
                </div>
                <div className="blog-info">
                    <p className="links"> {author} | <a href={url}>Comment {comments}</a></p>
                    <span   className="blog-title" onClick={()=>setModalIsOpen(true)}>{title}</span>
                </div>
            </div>
        </>
    )
}

export default BlogItem
