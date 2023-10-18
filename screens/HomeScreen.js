import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';

const HomeScreen = () => {
  return (
    <View>
      <HeaderImage />
      <Headertab />
      <Searchtab />
      <Divider orientation="vertical" style={{paddingTop: 10}} />
      <FeaturesTab />
      <PodcastsContainer />
      <TrendingPodcasts />
      <Divider orientation="vertical" style={{paddingTop: 10}} />
      <EdtechPopularContainer />
      <EdtechPopular />
      <Divider orientation="vertical" style={{paddingTop: 10}} />
      <DiscussionRoomContainer />
      <DiscussionRoom />
      <Divider orientation="vertical" style={{paddingTop: 10}} />
      {/* <BottomImage /> */}
    </View>
  );
};

const HeaderImage = () => (
  <View style={styles.ImageContainer}>
    <Image
      source={require('../assets/HeaderImage.png')}
      style={styles.headerimage}
    />
  </View>
);
const Headertab = () => (
  <View>
    <View style={styles.headercontainer}>
      <Text style={styles.headertext}>Welcome Sanju,</Text>
    </View>
    <View>
      <Text style={styles.qntext}>
        What type of learning you are looking for ?
      </Text>
    </View>
  </View>
);

const Searchtab = () => (
  <TouchableOpacity>
    <View style={styles.searchcontainer}>
      <View style={{paddingRight: 12, paddingLeft: 10}}>
        <Image
          source={{
            uri: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
          }}
          style={styles.searchimage}
        />
      </View>
      <View>
        <Text style={styles.searchtext}>Search for the latest podcasts</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const FeaturesTab = () => (
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View style={styles.featurescontainer}>
      <TouchableOpacity style={styles.podcasts}>
        <Text style={[styles.featurestext]}>Podcasts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.edtech}>
        <Text style={styles.featurestext}>Edtech</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.library}>
        <Text style={styles.featurestext}>Library</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.vlab}>
        <Text style={styles.featurestext}>Virtual Lab</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.discussionroom}>
        <Text style={styles.featurestext}>Discussion Room</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);

const PodcastsContainer = () => (
  <View>
    <View style={styles.podcastsHeader}>
      <View>
        <Text style={styles.podcastsTextHeader}>Trending Podcasts</Text>
      </View>
      <TouchableOpacity>
        <View>
          <Image
            source={require('../assets/play-button.png')}
            style={{width: 30, height: 30}}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <Text style={styles.podcastsTextHeader}>Listen Now</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

const TrendingPodcasts = () => {
  function openWebsite(websiteLink) {
    Linking.openURL(websiteLink);
  }

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={[styles.TrendingPodcastContainer, styles.elevatedCard]}>
        <View>
          <View
            style={{
              paddingTop: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
                color: 'white',
                fontWeight: 600,
              }}>
              All about Flexbox in React Native
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              paddingRight: 10,
              marginTop: 10,
            }}>
            <Image
              source={require('../assets/rnpod.png')}
              style={styles.podcastsImage}
            />
          </View>
          <View style={styles.PodcastsbodyContainer}>
            <Text
              numberOfLines={3}
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: 300,
              }}>
              A component can specify the layout of its children using the
              Flexbox algorithm. Flexbox is designed to provide a consistent
              layout on different screen sizes.flex will define how your items
              are going to “fill” over the available space along your main axis.
              Space will be divided according to each element's flex property.
            </Text>
          </View>

          <View style={styles.PodcastsfooterContainer}>
            <TouchableOpacity
              onPress={() =>
                openWebsite('https://reactnative.dev/docs/flexbox')
              }>
              <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                openWebsite(
                  'https://www.youtube.com/watch?v=MJ7P1JUyuFA&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&index=11',
                )
              }>
              <Text style={styles.socialLinks}>Listen Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[styles.TrendingPodcastContainer, styles.elevatedCard]}>
        <View>
          <View
            style={{
              paddingTop: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
                color: 'white',
                fontWeight: 600,
              }}>
              Will Chatgpt Kill Your Creativity?
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              paddingRight: 10,
              marginTop: 10,
            }}>
            <Image
              source={require('../assets/chatgpt.jpg')}
              style={styles.podcastsImage}
            />
          </View>
          <View style={styles.PodcastsbodyContainer}>
            <Text
              numberOfLines={3}
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: 300,
              }}>
              What is Chat GPT used for? With GPT you can generate coherent and
              well-written texts in a wide range of styles, topics and
              languages. In addition, news summaries, product descriptions or
              stories can be generated. Thanks to this chat, problems can be
              analyzed and solutions or answers to questions can be generated
            </Text>
          </View>

          <View style={styles.PodcastsfooterContainer}>
            <TouchableOpacity
              onPress={() => openWebsite('https://openai.com/blog/chatgpt/')}>
              <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                openWebsite('https://www.youtube.com/watch?v=0m2r9elReBY')
              }>
              <Text style={styles.socialLinks}>Listen Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[styles.TrendingPodcastContainer, styles.elevatedCard]}>
        <View>
          <View
            style={{
              paddingTop: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
                color: 'white',
                fontWeight: 600,
              }}>
              Top 7 Technology Trends in 2023
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              paddingRight: 10,
              marginTop: 10,
            }}>
            <Image
              source={require('../assets/RPA-2-1.jpg')}
              style={styles.podcastsImage}
            />
          </View>
          <View style={styles.PodcastsbodyContainer}>
            <Text
              numberOfLines={3}
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: 300,
                // flexShrink: 1
              }}>
              The growth of RPA is driven by the desire to improve efficiency,
              reduce errors, and lower costs in business processes. However,
              it's important to note that RPA is not a replacement for human
              workers and should be implemented as a complement to human labor,
              rather than a replacement.
            </Text>
          </View>

          <View style={styles.PodcastsfooterContainer}>
            <TouchableOpacity
              onPress={() =>
                openWebsite(
                  'https://www.alten.com/wp-content/uploads/2021/07/RPA-2-1.jpg',
                )
              }>
              <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                openWebsite('https://www.youtube.com/watch?v=ZSiXZxVpVhs')
              }>
              <Text style={styles.socialLinks}>Listen Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const EdtechPopularContainer = () => (
  <View>
    <View style={styles.podcastsHeader}>
      <View>
        <Text style={styles.podcastsTextHeader}>Popular Courses</Text>
      </View>
      <TouchableOpacity>
        <View>
          <Image
            source={require('../assets/play-button.png')}
            style={{width: 30, height: 30}}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <Text style={styles.podcastsTextHeader}>Register Now</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);
const EdtechPopular = () => {
  function openWebsite(websiteLink) {
    Linking.openURL(websiteLink);
  }

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={[styles.edtechCard, styles.elevatedEdtechCard]}>
        <Image
          source={{
            uri: 'https://imageio.forbes.com/blogs-images/bernardmarr/files/2019/06/5-Amazing-Examples-Of-Natural-Language-Processing-NLP-In-Practice-1200x639.jpeg?format=jpg&height=900&width=1600&fit=bounds',
          }}
          style={styles.edtechcardImage}
        />
        <View style={styles.edtechcardbody}>
          <Text style={styles.edtechcardTitle}>
            Natural Language Processing
          </Text>
          <Text style={styles.edtechcardDescription} numberOfLines={2}>
            In this course you will learn NLP from Basic to advanced with
            Practical approach.
          </Text>
        </View>
        <View style={styles.PodcastsfooterContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://totelligence.in/courses')
            }>
            <Text style={styles.edtechsocialLinks}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.edtechCard, styles.elevatedEdtechCard]}>
        <Image
          source={{
            uri: 'https://img-b.udemycdn.com/course/750x422/2605732_e3d5_3.jpg',
          }}
          style={styles.edtechcardImage}
        />
        <View style={styles.edtechcardbody}>
          <Text style={styles.edtechcardTitle}>Excel for Data Science</Text>
          <Text style={styles.edtechcardDescription} numberOfLines={2}>
            In this course you will learn Excel from Basic to advanced with
            Practical approach.
          </Text>
        </View>
        <View style={styles.PodcastsfooterContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://totelligence.in/courses')
            }>
            <Text style={styles.edtechsocialLinks}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.edtechCard, styles.elevatedEdtechCard]}>
        <Image
          source={{
            uri: 'https://www.mobilise.cloud/wp-content/uploads/2023/03/Alternatives-to-Docker-Container-1.png',
          }}
          style={styles.edtechcardImage}
        />
        <View style={styles.edtechcardbody}>
          <Text style={styles.edtechcardTitle}>Docker</Text>
          <Text style={styles.edtechcardDescription} numberOfLines={2}>
            In this course you will learn about Docker fundamentals.
          </Text>
        </View>
        <View style={styles.PodcastsfooterContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://totelligence.in/courses')
            }>
            <Text style={styles.edtechsocialLinks}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.edtechCard, styles.elevatedEdtechCard]}>
        <Image
          source={{
            uri: 'https://community-cdn-digitalocean-com.global.ssl.fastly.net/4CUuvmgrC4Cunov15s1GeQp9',
          }}
          style={styles.edtechcardImage}
        />
        <View style={styles.edtechcardbody}>
          <Text style={styles.edtechcardTitle}>MongoDb Tutorial</Text>
          <Text style={styles.edtechcardDescription} numberOfLines={2}>
            In this course you will learn MongoDb Database from basic to
            advanced.
          </Text>
        </View>
        <View style={styles.PodcastsfooterContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://totelligence.in/courses')
            }>
            <Text style={styles.edtechsocialLinks}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const DiscussionRoomContainer = () => (
  <View>
    <View style={styles.podcastsHeader}>
      <View>
        <Text style={styles.podcastsTextHeader}>Discussion Room</Text>
      </View>
      <TouchableOpacity>
        <View>
          <Image
            source={require('../assets/play-button.png')}
            style={{width: 30, height: 30}}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <Text style={styles.podcastsTextHeader}>Join Now</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

const DiscussionRoom = () => {
  return (
    <ScrollView>
      <View style={styles.discussionroomcontainer}>
        <View style={[styles.discussionroombox, styles.color1]}>
          <Text style={styles.discussionroomtext}>HTML Programming </Text>
          <TouchableOpacity>
            <Text style={styles.discussionroomtext}>Join Now</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.discussionroombox, styles.color2]}>
          <Text style={styles.discussionroomtext}>Kotlin Developers </Text>
          <TouchableOpacity>
            <Text style={styles.discussionroomtext}>Join Now</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.discussionroombox, styles.color3]}>
          <Text style={styles.discussionroomtext}>Let's Learn Django </Text>
          <TouchableOpacity>
            <Text style={styles.discussionroomtext}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// const BottomImage = () => (
//   <View style={styles.ImageContainer}>
//     <Image
//       source={require('../assets/BottomImage.png')}
//       style={styles.headerimage}
//     />
//   </View>
// );

export default HomeScreen;

const styles = StyleSheet.create({
  ImageContainer: {
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingRight: 10,
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'white',
    shadowOpacity: 0.6,
  },

  headerimage: {
    height: 110,
    width: '100%',
    borderRadius: 6,
  },
  headercontainer: {
    marginTop: 16,
    marginHorizontal: 17,
  },
  headertext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  qntext: {
    paddingTop: 15,
    paddingHorizontal: 15,
    color: 'white',
    fontWeight: 500,
    fontSize: 15,
  },
  searchimage: {
    height: 25,
    width: 25,
  },
  searchtext: {
    color: 'white',
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: 18,
  },
  searchcontainer: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    borderRadius: 12,
    marginTop: 10,
    height: 40,
    // width: 350,
    marginHorizontal: 12,
    marginRight: 20,
  },
  featurescontainer: {
    marginTop: 15,
    marginHorizontal: 15,
    flexDirection: 'row',
  },

  podcasts: {
    backgroundColor: '#5A20CB',
    marginRight: 15,
    borderRadius: 5,
  },
  featurestext: {
    color: 'white',
    marginHorizontal: 15,
    fontSize: 22,
    fontWeight: 500,
    height: 36,
    marginTop: 5,
    marginBottom: 5,
  },
  edtech: {
    backgroundColor: '#EF5354',
    marginRight: 15,
    borderRadius: 6,
  },
  library: {
    backgroundColor: '#50DBB4',
    marginRight: 15,
    borderRadius: 6,
  },
  vlab: {
    backgroundColor: '#5DA3FA',
    marginRight: 15,
    borderRadius: 6,
  },
  discussionroom: {
    backgroundColor: '#F7CD2E',
    marginRight: 15,
    borderRadius: 6,
  },
  podcastsHeader: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  podcastsTextHeader: {
    color: 'white',
    fontSize: 20,
    fontWeight: 500,
    marginHorizontal: 15,
  },
  TrendingPodcastContainer: {
    height: 340,
    width: 350,
    backgroundColor: '#333333',
    marginVertical: 14,
    marginHorizontal: 16,
    borderRadius: 6,
  },
  elevatedCard: {
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  podcastsImage: {
    height: 160,
    width: 330,
  },
  PodcastsbodyContainer: {
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  PodcastsfooterContainer: {
    padding: 8,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
  edtechCard: {
    height: 340,
    width: 350,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 12,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 10,
  },
  elevatedEdtechCard: {
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'blues',
  },
  edtechcardImage: {
    height: 180,
    // width: 100
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  edtechcardbody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  edtechcardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  edtechcardDescription: {
    color: '#242B2E',
    fontSize: 15,
    marginBottom: 12,
    marginTop: 6,
  },
  edtechsocialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#CAD5E2',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
  discussionroomcontainer: {
    // flexDirection: 'co',
    marginHorizontal: 12,
    marginBottom: 20,
  },
  discussionroombox: {
    margin: 18,
    marginBottom: 0,
    // backgroundColor: '#FF6666',
    padding: 8,
    borderRadius: 6,
    flexDirection: 'row',
    marginRight: 10,
    justifyContent: 'space-between',
  },
  discussionroomtext: {
    color: 'white',
    fontSize: 18,
    fontWeight: 700,
    marginRight: 8,
  },
  color1: {
    backgroundColor: '#EF5354',
  },
  color2: {
    backgroundColor: '#50DBB4',
  },
  color3: {
    backgroundColor: '#5DA3FA',
  },
  BottomImage: {},
});
