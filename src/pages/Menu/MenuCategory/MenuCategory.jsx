import React from 'react';
import SectionTitle from '../../../componensts/SectionTitle/SectionTitle';
import MenuCard from '../../../shared/MenuItems/MenuCard';
import Cover from '../../../shared/Cover/Cover';

const MenuCategory = ({ title,items,img }) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}

            <div className="grid grid-cols-2 gap-3 ">
                {items.map((item) => (
                    <MenuCard item={item} key={item._id}></MenuCard>
                ))}
            </div>
        </div>
    );
};

export default MenuCategory;