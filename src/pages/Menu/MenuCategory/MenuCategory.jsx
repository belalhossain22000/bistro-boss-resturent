import React from 'react';
import SectionTitle from '../../../componensts/SectionTitle/SectionTitle';
import MenuCard from '../../../shared/MenuItems/MenuCard';
import Cover from '../../../shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ title,items,img }) => {
    console.log(title)
    if (!title) {
        // Render a placeholder or loading state if the title is undefined
        return <div>Loading...</div>;
      }
    
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}

            <div className="grid grid-cols-2 gap-3 ">
                {items.map((item) => (
                    <MenuCard item={item} key={item._id}></MenuCard>
                ))}
            </div>
          <div className='text-center my-7'>
          <Link to={`/order/${title}`}><button className="btn border-0 border-b-4 hover:text-white bg-white text-black">
            Vew full menu
          </button></Link>
          </div>
        </div>
    );
};

export default MenuCategory;