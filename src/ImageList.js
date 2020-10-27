import React, { Component } from 'react';
import images from './data.js';
import MyHornedCreatures from './MyHornedCreatures.js';


export default class ImageList extends Component {

    state = {

        filter: ''
    }

    handleChange = e => {
        this.setState({
            filter: e.target.value
        });
    }




    render() {

        const filteredImages = images.filter((image) => {

            if (!this.state.filter) return true;
            if (image.horns === Number(this.state.filter)) return true;

            return false;
        });




        return (
            <>
                <select onChange={this.handleChange}>
                    <option value=''>Show All</option>
                    <option value="1">One Horn</option>
                    <option value="2">Two Horns</option>
                    <option value="3">Three Horns</option>
                    <option value="100">One Hundred Horns</option>

                </select>
                <div className="creatures">
                    {
                        filteredImages.map(i =>
                            <MyHornedCreatures
                                caption={i.title}
                                color={i.description}
                                name={i.keyword}
                                image={i.url}
                            />)
                    }

                </div>
            </>
        )
    }
}
