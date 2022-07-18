import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function NavButton({ onPress }) {
    //
    return (
        <TouchableOpacity onPress={ onPress }>
            <View style={styles.container}>
                <Ionicons
                    name="ios-add"
                    color="orange"
                    size={32}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 22
    },
});

export default NavButton;