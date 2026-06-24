import { Avatar, Button, Card, Typography, useThemeColor } from "heroui-native";
import type { JSX } from "react";
import React, { useState } from 'react';
import Svg, { Path } from "react-native-svg";
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Switch, SafeAreaView } from 'react-native';

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
  { label: 'Posts', value: '147', icon: '📝' },
  { label: 'Followers', value: '12.4k', icon: '👥' },
  { label: 'Following', value: '856', icon: '👤' },
  { label: 'Likes', value: '3.2k', icon: '❤️' },
];

const recentActivity = [
  { user: 'John Doe', action: 'liked your post', time: '2m ago' },
  { user: 'Jane Smith', action: 'commented on your photo', time: '15m ago' },
  { user: 'Mike Johnson', action: 'shared your content', time: '1h ago' },
];

const Dashboard = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [isFollowing, setIsFollowing] = useState(false);
  const [notificationCount] = useState(3);

  // THIS IS THE FIX - Return the UI directly, don't define HomeScreen inside
  return (
    <SafeAreaView className={`flex-1 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-b from-blue-300 to-blue-500'}`}>
      {/* HEADER WITH INTERACTIVE ELEMENTS */}
      <View className="flex-row justify-between items-center px-6 pt-4 pb-4">
        <View>
          <Text className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-white'}`}>
            Dashboard
          </Text>
          <Text className={`text-sm ${isDark ? 'text-gray-400' : 'text-white/80'}`}>
            Welcome back, Avie!
          </Text>
        </View>

        {/* INTERACTIVE HEADER BUTTONS */}
        <View className="flex-row items-center gap-4">
          <TouchableOpacity
            className="relative p-2 bg-white/20 rounded-full"
            onPress={() => alert('Notifications')}
          >
            <Text className="text-white text-xl">🔔</Text>
            {notificationCount > 0 && (
              <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 items-center justify-center">
                <Text className="text-white text-xs font-bold">{notificationCount}</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            className="p-2 bg-white/20 rounded-full"
            onPress={() => setIsDark(!isDark)}
          >
            <Text className="text-white text-xl">{isDark ? '☀️' : '🌙'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* PROFILE CARD */}
        <View className="px-6 mb-4">
          <View className="overflow-hidden shadow-2xl rounded-3xl bg-white dark:bg-gray-800">
            {/* HEADER WITH IMAGE */}
            <View className="relative h-40 bg-blue-600">
              <ImageBackground
                source={{ uri: "https://images.pexels.com/photos/30649280/pexels-photo-30649280.jpeg" }}
                className="flex-1"
                imageClassName="opacity-50"
              />
              <View className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </View>

            {/* AVATAR WITH FOLLOW BUTTON */}
            <View className="relative -mt-12 items-center px-6">
              <View className="relative">
                <Avatar className="border-4 border-white dark:border-gray-800 shadow-lg" size="lg">
                  <Avatar.Image
                    source={{
                      uri: "https://scontent.fceb10-1.fna.fbcdn.net/v/t39.30808-6/571178415_835866635489014_4193247801864962975_n.jpg?stp=dst-jpg_tt6&cstp=mx958x959&ctp=s958x959&_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEhBPi0-7F-9pIjd7TuS5sZs07eIHNmCyCzTt4gc2YLICVhSoQkQeJYNi9ogbOF_R-taG_ycz6GCgzm4Situ4Xl&_nc_ohc=uJe5_v-RMpsQ7kNvwG57WAo&_nc_oc=AdoskZsSvMxFRTM05VrgF5BcSrjFKH5ghZA0HthNMlIYdaAk5eb1c6FCR7KJ5N671f8&_nc_zt=23&_nc_ht=scontent.fceb10-1.fna&_nc_gid=F2CM6n9JfBcRCQid7SZKaA&_nc_ss=7b2a8&oh=00_Af_smMr7xvPCyxTI8MU0612itRyX2iGP3DpCIaE3T_6_pQ&oe=6A40FADF"
                    }}
                  />
                  <Avatar.Fallback>JD</Avatar.Fallback>
                </Avatar>
                <View className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800" />
              </View>

              {/* FOLLOW BUTTON */}
              <TouchableOpacity
                className={`mt-3 px-8 py-2 rounded-full ${
                  isFollowing
                    ? 'bg-gray-200 dark:bg-gray-700'
                    : 'bg-blue-500 active:bg-blue-600'
                }`}
                onPress={() => setIsFollowing(!isFollowing)}
              >
                <Text className={`font-semibold ${
                  isFollowing
                    ? 'text-gray-700 dark:text-gray-300'
                    : 'text-white'
                }`}>
                  {isFollowing ? '✅ Following' : '➕ Follow'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* PROFILE INFO - FIXED: Using View instead of Card.Title */}
            <View className="px-6 pb-4 mt-4">
              <Text className="font-bold text-center text-2xl text-gray-800 dark:text-white">
                Avie
              </Text>
              <Text className="text-center text-base text-gray-600 dark:text-gray-400">
                Facebook
              </Text>
              <Text className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2 px-4">
                🚀 Coffee Lover | 💻 Batak mag Code Vibe? | ✨ Building then forgetting
              </Text>
            </View>
          </View>
        </View>

        {/* STATS CARDS */}
        <View className="px-6 mb-4">
          <Text className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-white'}`}>
            📊 Statistics
          </Text>
          <View className="flex-row flex-wrap gap-3">
            {stats.map((stat, index) => (
              <TouchableOpacity
                key={index}
                className={`w-[47%] bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md active:opacity-70`}
                onPress={() => alert(`${stat.label}: ${stat.value}`)}
              >
                <View className="flex-row items-center justify-between">
                  <Text className="text-2xl">{stat.icon}</Text>
                  <Text className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    {stat.value}
                  </Text>
                </View>
                <Text className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {stat.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* RECENT ACTIVITY - FIXED: Using View instead of Card */}
        <View className="px-6 mb-4">
          <Text className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-white'}`}>
            🔄 Recent Activity
          </Text>
          <View className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
            {recentActivity.map((activity, index) => (
              <TouchableOpacity
                key={index}
                className={`flex-row justify-between items-center p-4 ${
                  index < recentActivity.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''
                }`}
                onPress={() => alert(`View activity from ${activity.user}`)}
              >
                <View>
                  <Text className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    {activity.user}
                  </Text>
                  <Text className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {activity.action}
                  </Text>
                </View>
                <Text className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  {activity.time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* QUICK ACTIONS */}
        <View className="px-6 pb-6">
          <Text className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-white'}`}>
            ⚡ Quick Actions
          </Text>
          <View className="flex-row flex-wrap gap-3">
            <TouchableOpacity
              className="flex-1 bg-blue-500 rounded-xl p-4 items-center active:bg-blue-600"
              onPress={() => alert('Create New Post')}
            >
              <Text className="text-2xl mb-1">📝</Text>
              <Text className="text-white font-semibold">New Post</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-1 bg-purple-500 rounded-xl p-4 items-center active:bg-purple-600"
              onPress={() => alert('View Messages')}
            >
              <Text className="text-2xl mb-1">💬</Text>
              <Text className="text-white font-semibold">Messages</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* BOTTOM NAVIGATION */}
        <View className="flex-row justify-around items-center bg-white dark:bg-gray-800 px-6 py-3 rounded-t-3xl shadow-lg">
          {['home', 'search', 'plus', 'heart', 'profile'].map((tab) => (
            <TouchableOpacity
              key={tab}
              className={`p-2 rounded-full ${activeTab === tab ? 'bg-blue-100 dark:bg-blue-900/30' : ''}`}
              onPress={() => setActiveTab(tab)}
            >
              <Text className="text-2xl">
                {tab === 'home' && '🏠'}
                {tab === 'search' && '🔍'}
                {tab === 'plus' && '➕'}
                {tab === 'heart' && '❤️'}
                {tab === 'profile' && '👤'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;