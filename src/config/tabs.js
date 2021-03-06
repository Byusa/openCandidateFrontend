const BRAND_COLOR = "rgba(82, 194, 175, 1)";

type Props = {
  showLabel: boolean,
  showIcon: boolean
};

export default ({ showLabel, showIcon }: Props) => ({
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    showLabel,
    showIcon,
    upperCaseLabel: false,
    pressColor: BRAND_COLOR,
    activeTintColor: BRAND_COLOR,
    inactiveTintColor: "gray",
    labelStyle: {
      fontSize: 13,
      margin: 0
    },
    indicatorStyle: {
      backgroundColor: BRAND_COLOR
    },
    tabStyle: {
      flex: 1
    },
    style: {
      backgroundColor: "transparent"
    }
  }
});
