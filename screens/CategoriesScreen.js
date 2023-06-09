import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummy_data';

function renderCategoryItem(itemData) {
    return (
        <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
        />
    );
}

function CategoriesScreen() {
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item, index) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
}

export default CategoriesScreen;
