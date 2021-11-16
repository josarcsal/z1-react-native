import React, { useState } from 'react'
import { TouchableOpacity, Dimensions } from 'react-native';

import { CategoryCardContainer, CategoryCardName } from '../themes/appTheme';


interface Props {
    title: string;
    categoriaActual: string;
    setCategoria: React.Dispatch<React.SetStateAction<string>>;
}


export const CategoryCard = ({title, categoriaActual, setCategoria} : Props ) => {

    return (
        
        <TouchableOpacity
            activeOpacity={ 0.9 } 
            onPress={ () => setCategoria(title)}
        >
            <CategoryCardContainer style={ title === categoriaActual ?
             { backgroundColor: '#b77ac4'} :
             { backgroundColor: '#593c71'}
             }>
                    <CategoryCardName>
                        { title }
                    </CategoryCardName>
            </CategoryCardContainer>
            
        </TouchableOpacity>
    )
}