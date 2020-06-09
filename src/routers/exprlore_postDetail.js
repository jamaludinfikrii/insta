import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Explore from '../screens/explore'
import PostDetail from './../screens/postDetail'

const ExplorePostDetailRouter = createAppContainer(createStackNavigator(
    {
        explore : Explore,
        postDetail : PostDetail
    },
    {
        headerMode : "none"
    }
))

export default ExplorePostDetailRouter;