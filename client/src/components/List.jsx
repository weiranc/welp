import React from 'react';

let List = (props) => {
    return(
        <div id="listDiv">
            {props.choices.map((item, key) => (
                <div className="individual_container"  key={key}>
                <div id="restaurantItems">{`${item.restaurant}`}</div>
                    <div className="cross_button">{'x'}</div>
                </div>
            ))}
        </div>
    )
}

export default List;