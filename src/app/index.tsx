import { Avatar, Button, Card, Typography, useThemeColor } from "heroui-native";
import type { JSX } from "react";
import React, { useState } from "react";
import Svg, { Path } from "react-native-svg";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

function HeroUILogo({ tintColor }: { tintColor: string }): JSX.Element {
  return (
    <Svg width={90} height={30} viewBox="0 0 140 44" fill="none">
      <Path
        d="M0.677734 11.3847V24.0405C0.677734 24.6387 0.985209 25.1946 1.49107 25.5109L10.1195 30.9067C11.2693 31.6257 12.7586 30.796 12.7586 29.4363V18.7981C12.7586 18.186 13.0803 17.6194 13.605 17.3074L18.8683 14.1785V41.4437C18.8683 42.7988 20.3486 43.6293 21.4988 42.9195L30.4044 37.4229C30.9152 37.1076 31.2264 36.549 31.2264 35.9471V9.76484C31.2264 8.41634 29.759 7.58483 28.6085 8.28139L18.8683 14.1785V2.55643C18.8683 1.21158 17.408 0.379537 16.2574 1.06878L1.51927 9.89703C0.997365 10.2097 0.677734 10.7747 0.677734 11.3847Z"
        fill={tintColor}
      />
      <Path
        d="M63.8763 24.0707C63.8763 20.4817 62.4078 18.8253 59.4709 18.8253C56.1076 18.8253 53.7391 21.0799 53.7391 26.1412V37.7363H47.6756V5.52769H53.7391V17.3069C55.2075 14.9142 57.6234 13.7179 60.9394 13.7179C66.5764 13.7179 69.8924 17.1688 69.8924 22.9664V37.7363H63.8763V24.0707Z"
        fill={tintColor}
      />
      <Path
        d="M84.8996 38.4725C77.3677 38.4725 72.5832 33.5952 72.5832 26.0952C72.5832 18.6872 77.3203 13.7179 84.8996 13.7179C93.0947 13.7179 97.5475 19.5154 96.3158 27.6596H78.6467C78.9783 31.5247 81.252 33.7333 84.8996 33.7333C87.8839 33.7333 89.684 32.2149 90.1577 30.6964H96.1737C95.2263 35.2057 91.0577 38.4725 84.8996 38.4725ZM78.7888 23.6566H90.4419C90.3945 20.4817 88.3102 18.3191 84.7574 18.3191C81.5836 18.3191 79.3572 20.1596 78.7888 23.6566Z"
        fill={tintColor}
      />
      <Path
        d="M99.6225 20.3437C99.6225 16.5246 101.754 14.4541 105.828 14.4541H113.597V19.4234H105.686V37.7363H99.6225V20.3437Z"
        fill={tintColor}
      />
      <Path
        d="M126.863 38.4725C119.189 38.4725 114.31 33.5492 114.31 26.0952C114.31 18.6412 119.189 13.7179 126.863 13.7179C134.442 13.7179 139.322 18.6412 139.322 26.0952C139.322 33.5492 134.442 38.4725 126.863 38.4725ZM126.863 33.4572C130.653 33.4572 133.163 30.5584 133.163 26.0952C133.163 21.632 130.653 18.6872 126.863 18.6872C123.026 18.6872 120.515 21.632 120.515 26.0952C120.515 30.5584 123.026 33.4572 126.863 33.4572Z"
        fill={tintColor}
      />
    </Svg>
  );
}

const stats = [
  { label: "Posts", value: "12", icon: "📝" },
  { label: "Followers", value: "9.9k", icon: "👥" },
  { label: "Following", value: "1", icon: "👤" },
  { label: "Likes", value: "39.2k", icon: "❤️" },
];

const Dashboard = () => {
  const [isDark, setIsDark] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <SafeAreaView
      className={`flex-1 ${isDark ? "bg-gray-900" : "bg-gradient-to-b from-blue-300 to-blue-500"}`}
    >
      {/* Header */}
      <View className="flex-row justify-between items-center px-6 pt-4 pb-2">
        <View>
          <Text className={`text-2xl font-bold ${isDark ? "text-white" : "text-white"}`}>
            Profile
          </Text>
          <Text className={`text-sm ${isDark ? "text-gray-400" : "text-white/80"}`}>Avie</Text>
        </View>
        <TouchableOpacity
          className="p-2 bg-white/20 rounded-full"
          onPress={() => setIsDark(!isDark)}
        >
          <Text className="text-white text-xl">{isDark ? "☀️" : "🌙"}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <View className="px-6 mt-2">
          <View className="overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-lg">
            {/* Cover Image */}
            <View className="relative h-32 bg-blue-600">
              <ImageBackground
                source={{
                  uri: "https://images.pexels.com/photos/30649280/pexels-photo-30649280.jpeg",
                }}
                className="flex-1"
                imageClassName="opacity-50"
              />
              <View className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </View>

            {/* Avatar */}
            <View className="relative -mt-10 items-center px-6">
              <Avatar className="border-4 border-white dark:border-gray-800 shadow-md" size="lg">
                <Avatar.Image
                  source={{
                    uri: "https://scontent.fcgy1-3.fna.fbcdn.net/v/t1.15752-9/731037172_27300323686285757_6392860423528158107_n.png?stp=dst-png_s480x480&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGTzCj3ms4B_-OUG28UC5JoXQnwct_uoqZdCfBy3-6ipqnr8FtQETD8vFMSqdmPzP_Rc3dNxkcZCqmZpMIwS-cv&_nc_ohc=8K_Qq8SeeesQ7kNvwHfsgy2&_nc_oc=Adoyd-QBBKWoZsUYXxKEVs7KFAdY8GV3j1VwT-nJeQzXSeSoey7aPqpy1SkcfPA84KY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcgy1-3.fna&_nc_ss=7a22e&oh=03_Q7cD5gFH_rma98GzWC-6Dsv31N73CoYL6ULLrA11MmgbVxktqQ&oe=6A68C06B",
                  }}
                />
                <Avatar.Fallback>JD</Avatar.Fallback>
              </Avatar>
            </View>

            {/* User Info */}
            <View className="px-6 pb-4 mt-2">
              <Text className="font-bold text-center text-xl text-gray-800 dark:text-white">
                Joerl Davied P. Tayong
              </Text>
              <Text className="text-center text-sm text-gray-500 dark:text-gray-400">Facebook</Text>

              {/* Follow Button */}
              <TouchableOpacity
                className={`mt-3 mx-auto px-8 py-1.5 rounded-full ${
                  isFollowing ? "bg-gray-200 dark:bg-gray-700" : "bg-blue-500"
                }`}
                onPress={() => setIsFollowing(!isFollowing)}
              >
                <Text
                  className={`font-medium text-sm ${
                    isFollowing ? "text-gray-700 dark:text-gray-300" : "text-white"
                  }`}
                >
                  {isFollowing ? "Following" : "Follow"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Stats */}
        <View className="px-6 mt-4">
          <View className="flex-row flex-wrap gap-2">
            {stats.map((stat, index) => (
              <View key={index} className="w-[48%] bg-white/20 backdrop-blur-sm rounded-xl p-3">
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg">{stat.icon}</Text>
                  <Text className={`text-lg font-bold ${isDark ? "text-white" : "text-white"}`}>
                    {stat.value}
                  </Text>
                </View>
                <Text className={`text-xs mt-0.5 ${isDark ? "text-gray-300" : "text-white/80"}`}>
                  {stat.label}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View className="px-6 pb-6 mt-4">
          <View className="flex-row gap-3">
            <TouchableOpacity
              className="flex-1 bg-white/20 backdrop-blur-sm rounded-xl p-3 items-center"
              onPress={() => alert("New Post")}
            >
              <Text className="text-xl">📝</Text>
              <Text
                className={`text-xs font-medium mt-1 ${isDark ? "text-gray-300" : "text-white"}`}
              >
                Post
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-1 bg-white/20 backdrop-blur-sm rounded-xl p-3 items-center"
              onPress={() => alert("Messages")}
            >
              <Text className="text-xl">💬</Text>
              <Text
                className={`text-xs font-medium mt-1 ${isDark ? "text-gray-300" : "text-white"}`}
              >
                Message
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-1 bg-white/20 backdrop-blur-sm rounded-xl p-3 items-center"
              onPress={() => alert("Settings")}
            >
              <Text className="text-xl">⚙️</Text>
              <Text
                className={`text-xs font-medium mt-1 ${isDark ? "text-gray-300" : "text-white"}`}
              >
                Settings
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
