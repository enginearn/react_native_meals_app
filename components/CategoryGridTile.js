import { View, StyleSheet, Text, TouchableOpacity, Pressable } from "react-native";

function CategoryGridTile({title, color}) {
    return (
        <Pressable>
            <View>
                <Text>
                    {title}
                </Text>
            </View>
        </Pressable>
    );
}

export default CategoryGridTile;

// const styles = StyleSheet.create({
//     gridItem: {
//         flex: 1,
//         margin: 15,
//         height: 150,
//     },
//     container: {
//         flex: 1,
//         borderRadius: 10,
//         shadowColor: "black",
//         shadowOpacity: 0.26,
//         shadowOffset: { width: 0, height: 2 },
//         shadowRadius: 10,
//         elevation: 3, // for android
//         padding: 15,
//         justifyContent: "flex-end",
//         alignItems: "flex-end",
//     },
//     title: {
//         fontFamily: "open-sans-bold",
//         fontSize: 22,
//         textAlign: "right",
//     },
// });
