import React from 'react'
import './NewsBlog.css';
import './Articles.css'
function NewsBlog() {
    const NewsBlog = [
        { id: 1, imageUrl: './imges/blog1.png', title: '06 SEPTEMBER', p: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. ', btn: 'Read More>>'  },
        { id: 2, imageUrl: './imges/blog2.png', title: '06 SEPTEMBER', p: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. ', btn: 'Read More>>'  },
        { id: 3, imageUrl: './imges/blog3.png', title: '06 SEPTEMBER', p:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.  ', btn: 'Read More>>' },
        { id: 4, imageUrl: './imges/blog4.png', title: '06 SEPTEMBER', p: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. ', btn: 'Read More >>'  },
      ];
  return (
   <section className='Collection NewsBlog'>
   <h5>News & BLOGS</h5>
   <h2>Jewelery Articles</h2>
   <div className='NewsItem'>
   {NewsBlog.map(NewsBlog => (
    <div key={NewsBlog.id} className="NewsBlog-item">
    <div>
      <img src={NewsBlog.imageUrl} alt={`Product ${NewsBlog.id}`} className={NewsBlog.id === 3 ? 'selected-image' : ''} />
      </div>
      <h3>{NewsBlog.title}</h3>
      <p className='sellbtn'>{NewsBlog.p}</p>
      <button className='sellbtn'>{NewsBlog.btn}</button>
    </div>
  ))}
  </div>
   </section>
  )
}

export default NewsBlog
