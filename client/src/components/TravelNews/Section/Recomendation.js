import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '0px',
      left:'0px',
      zindex:'400',
      right: 'auto',
      bottom: 'auto',
      width:"1250px",
      height:"600px",
      background:'black',
      
      overflowY:'none'
   
    //   transform: 'translate(-50%, -50%)',
    },
  };

 
const Recomendation = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
     const modalHandler =() =>{
        return(
            <div style={{overFlow:"none"}}>
      
            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
            <button style={{position:"absolute",right:'50px'}}onClick={closeModal}>close</button>
           
            <div style={{width:"500px",height:"400px",background:'white',zIndex:"450",border:"1px solid white",
           opacity:"4",position:"relative",top:'50px'}}>

            </div>
            <div style={{width:"670px",height:"400px",background:'blue',zIndex:"450",border:"1px solid white",
           opacity:"4",position:"relative",top:'-350px',left:'500px'}}>

            </div>
            </Modal>
         
        </div>
        )
      
     }
    return (
        <div style={{width:'900px',height:"500px",paddingBottom:'50px'}}>
            <div style={{display:'flex',position:'relative',left:'300px'}}>
                <h2>Hello 제주 추천</h2>
            </div>
            <div style={{display:'flex',justifyContent:"space-around",position:'relative',
        top:'50px',left:'-150px',cursor:'pointer'}}>
            <div style={{marginBottom:'150px'}}>
                <div>#호텔</div>
                <img style={{width:'150px',height:"120px",cursor:'pointer'}}alt='호텔' src='image/hotel.png'
                onClick={openModal}></img>
            </div>
            <div style={{}}>
                <h4>#쇼핑</h4>
                <div>
                    <img style={{width:'150px',height:'120px',cursor:'pointer'} } alt='쇼핑' src='image/쇼핑.png'></img>
                </div>
            </div>
            <div>
            <div style={{width:'150px',height:'100px',marginBottom:'50px',
           }}>
                <div>#맛집</div>
                <img style={{width:'150px',height:'120px',cursor:'pointer'}} alt='맛집' src='image/restaurant.png'></img>
            </div>
            </div>
          
            <div>
            <div style={{position:'absolute',}}>
                <h4>#관광지</h4>
                <div>
                    <img style={{width:'150px',height:'120px'} } alt='관광지' src='image/beach.png'></img>
                </div>
            </div>
            </div>
            
            </div>
 
         {modalHandler()}
        </div>
    );
};

export default Recomendation;