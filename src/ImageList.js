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
            if (image.keyword === this.state.filter) return true;

            return false;
        });




        return (
            <>
                <select onChange={this.handleChange}>
                    <option value=''>Show All</option>
                    <option value='one'>One Horn</option>
                    <option value='two'>Two Horns</option>

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
