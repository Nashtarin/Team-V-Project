import React from 'react';
import { useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';
const SingleBlog = (props) => {

    const { blog, own } = props;
    console.log(blog)
    const history = useHistory();
    const user = useSelector(state => state.user?.user)

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://guarded-thicket-98440.herokuapp.com/blogs/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {

                        alert('delete success');
                        history.push('/home');
                    }
                });
        }

    }
    const handleUpdate = (id) => {

    }
    console.log(props);
    return (
        <div>
            <div className="row" style={{ margin: '3px', padding: '7px', border: '2px solid #0088cc', marginBottom: '5px', borderRadius: '25px' }}>
                <div className="col-lg-5" style={{}}>
                    <img style={{ borderRadius: "15px", textAlign: 'start', width: '200px', height: '210px' }} src={blog.img} alt="" />

                </div>
                <div className="col-lg-7" style={{ textAlign: 'start' }}>

                    <h6>Title: {blog.name}</h6>
                    <p>Posted by {blog.userEmail}  </p>
                    <small style={{ fontSize: '13px' }}>Posted:{blog?.postDate}</small>
                    <p>Description:{blog.description}</p>
                    {
                        (own === 'true') ? <button style={{ backgroundColor: 'red', color: 'white', padding: '7px', borderRadius: '5px', marginRight: "17px" }} onClick={() => handleDelete(blog._id)}>Delete</button> : <p></p>
                    }
                    {
                        (own === 'true') ? <button style={{ backgroundColor: 'green', color: 'white', padding: '7px', borderRadius: '5px' }} onClick={() => handleUpdate(blog._id)}>Update</button> : <p></p>
                    }
                </div>
            </div>

        </div>
    );
};

export default SingleBlog;