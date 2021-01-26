import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSweet: null
        };
    }    
    
    onSweetPick(sweet) {
        this.setState({selectedSweet: sweet});
    }

    renderPickedSweet(sweet) {
        if (sweet) {
            return ( 
                <Card>
                    <CardImg top src={sweet.image} alt={sweet.name} />
                    <CardBody>
                        <CardTitle>{sweet.name}</CardTitle>
                        <CardText>{sweet.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        return <div />
    }

    render() {
        const sweets = this.props.sweets.map(sweet => {
            return (
                <div key={sweet.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onSweetPick(sweet)}>
                        <CardImg width="100%" src={sweet.image} alt={sweet.name} />
                        <CardImgOverlay>
                            <CardTitle>{sweet.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {sweets}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderPickedSweet(this.state.selectedSweet)}
                    </div>
                </div>
            </div>
        );
    }
}
export default Directory;