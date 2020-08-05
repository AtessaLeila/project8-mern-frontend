import React from 'react'
import CatalogueHeader from './CatalogueHeader'
import CatalogueDetail from './CatalogDetail'
import ItemForm from './ItemForm'

function Catalogue() {
    return (
        <div className="catalogue-main">
           <CatalogueHeader /> 
           {/* <div className="catalogue-body">
            <div className="catalogue-sidebar">

            </div>
            <CatalogueDetail />
           </div> */}
           <ItemForm />
        </div>
    )
}

export default Catalogue
