import React from 'react'
import {connect} from 'react-redux'
import CollectionItem from '../../components/collection-item/CollectionItem.js'
import {selectCollection} from '../../redux/shop/shopSelector.js'
import './shop-collection-page.scss'

const CollectionPage = ({collection}) => {  
    const {title, items} =  collection
    return (
        <div className='collection-page'>
            <h2>{title}</h2>
            <div className='items'>
                {items.map(item => <CollectionItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
}

export default connect(mapStateToProps, null)(CollectionPage);