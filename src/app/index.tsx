
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Avatar } from "heroui-native";

const user = {
  name: "Joerl Davied P. Tayong",
  username: "Avie",
  platform: "Facebook",
  cover: "https://images.pexels.com/photos/30649280/pexels-photo-30649280.jpeg",
  avatar:
    "https://scontent.fcgy1-3.fna.fbcdn.net/v/t1.15752-9/731037172_27300323686285757_6392860423528158107_n.png?stp=dst-png_s480x480&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGTzCj3ms4B_-OUG28UC5JoXQnwct_uoqZdCfBy3-6ipqnr8FtQETD8vFMSqdmPzP_Rc3dNxkcZCqmZpMIwS-cv&_nc_ohc=8K_Qq8SeeesQ7kNvwHfsgy2&_nc_oc=Adoyd-QBBKWoZsUYXxKEVs7KFAdY8GV3j1VwT-nJeQzXSeSoey7aPqpy1SkcfPA84KY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcgy1-3.fna&_nc_ss=7a22e&oh=03_Q7cD5gFH_rma98GzWC-6Dsv31N73CoYL6ULLrA11MmgbVxktqQ&oe=6A68C06B",
};

const stats = [
  { id: "posts", label: "Posts", value: "12", icon: "📝" },
  { id: "followers", label: "Followers", value: "9.9k", icon: "👥" },
  { id: "following", label: "Following", value: "1", icon: "👤" },
  { id: "likes", label: "Likes", value: "39.2k", icon: "❤️" },
];

const actions = [
  { id: "post", icon: "📝", title: "Post" },
  { id: "message", icon: "💬", title: "Message" },
  { id: "settings", icon: "⚙️", title: "Settings" },
];

export default function Dashboard() {
  const [isDark, setIsDark] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const onActionPress = (title: string) => {
    alert(title);
  };

  return (
    <SafeAreaView className={`flex-1 ${isDark ? "bg-gray-900" : "bg-blue-500"}`}>
      <View className="flex-row items-center justify-between px-6 pt-4 pb-2">
        <View>
          <Text className="text-2xl font-bold text-white">Profile</Text>
          <Text className={`text-sm ${isDark ? "text-gray-400" : "text-white/80"}`}>
            {user.username}
          </Text>
        </View>

        <TouchableOpacity
          className="rounded-full bg-white/20 p-2"
          onPress={() => setIsDark((prev) => !prev)}
        >
          <Text className="text-xl text-white">{isDark ? "☀️" : "🌙"}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        <View className="mt-2 px-6">
          <View className="overflow-hidden rounded-3xl bg-white shadow-lg">
            <View className="relative h-32 bg-blue-600">
              <ImageBackground
                source={{ uri: user.cover }}
                className="flex-1"
                imageClassName="opacity-50"
              />
              <View className="absolute inset-0 bg-black/40" />
            </View>

            <View className="relative -mt-10 items-center px-6">
              <Avatar className="border-4 border-white shadow-md" size="lg">
                <Avatar.Image source={{ uri: user.avatar }} />
                <Avatar.Fallback>JD</Avatar.Fallback>
              </Avatar>
            </View>

            <View className="mt-2 px-6 pb-5">
              <Text className="text-center text-xl font-bold text-gray-800">{user.name}</Text>

              <Text className="text-center text-sm text-gray-500">{user.platform}</Text>

              <TouchableOpacity
                className={`mx-auto mt-4 rounded-full px-8 py-2 ${
                  isFollowing ? "bg-gray-200" : "bg-blue-500"
                }`}
                onPress={() => setIsFollowing((prev) => !prev)}
              >
                <Text className={`font-semibold ${isFollowing ? "text-gray-700" : "text-white"}`}>
                  {isFollowing ? "Following" : "Follow"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="mt-4 px-6">
          <View className="flex-row flex-wrap justify-between">
            {stats.map((stat) => (
              <View key={stat.id} className="mb-3 w-[48%] rounded-xl bg-white/20 p-3">
                <View className="flex-row items-center justify-between">
                  <Text className="text-lg">{stat.icon}</Text>
                  <Text className="text-lg font-bold text-white">{stat.value}</Text>
                </View>

                <Text className={`mt-1 text-xs ${isDark ? "text-gray-300" : "text-white/80"}`}>
                  {stat.label}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View className="mt-2 px-6">
          <View className="flex-row gap-3">
            {actions.map((action) => (
              <TouchableOpacity
                key={action.id}
                className="flex-1 items-center rounded-xl bg-white/20 p-3"
                onPress={() => onActionPress(action.title)}
              >
                <Text className="text-xl">{action.icon}</Text>
                <Text
                  className={`mt-1 text-xs font-medium ${isDark ? "text-gray-300" : "text-white"}`}
                >
                  {action.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
