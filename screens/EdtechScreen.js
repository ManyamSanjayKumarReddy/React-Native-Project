import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';
import {color} from 'react-native-elements/dist/helpers';

const EdtechScreen = () => {
  return (
    <View>
      {/* <Image
        source={require('../assets/HeaderImage.png')}
        style={{
          height: 110,
        }}
      /> */}
      
      <View style={styles.HeaderContainer}>
        <Text style={styles.headerText}>Totelligence Solutions</Text>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.aboutEdtechContainer}>
          <View style={styles.aboutEdtechTitle}>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                fontWeight: 700,
              }}>
              About Us :
            </Text>
          </View>
          <View style={styles.aboutEtechBody}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 400,
              }}>
              Totelligence is an Online Ed-tech platform which delivers
              quality education and knowledge required to be excel in Data
              Science and Machine Learning Field.
            </Text>
          </View>
        </View>
        <View style={styles.aboutEdtechContainer}>
          <View style={styles.aboutEdtechTitle}>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                fontWeight: 700,
              }}>
              Our Mission :
            </Text>
          </View>
          <View style={styles.aboutEtechBody}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 400,
              }}>
              Our Organization is here to Serve the world with the Best
              knowledge. We are thinking in the perspective of the every
              individual for attaining the education in their desired domains.
            </Text>
          </View>
        </View>
        <View style={styles.aboutEdtechContainer}>
          <View style={styles.aboutEdtechTitle}>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                fontWeight: 700,
              }}>
              Who We Are :
            </Text>
          </View>
          <View style={styles.aboutEtechBody}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 400,
              }}>
              We are Students with a Professional background. We are happy
              learners looking for like minded people to enhance the overall
              LEARNING JOURNEY.
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.CategoryBox}>
        <Text style={styles.categoryTitle}>Categories</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={[styles.CategoryContainer, styles.color1]}>
            <Text style={styles.categoryText}>Data Science</Text>
          </View>
          <View style={[styles.CategoryContainer, styles.color3]}>
            <Text style={styles.categoryText}>Machine Learning</Text>
          </View>
          <View style={[styles.CategoryContainer, styles.color4]}>
            <Text style={styles.categoryText}>Web Development</Text>
          </View>
          <View style={[styles.CategoryContainer, styles.color2]}>
            <Text style={styles.categoryText}>Devops</Text>
          </View>
          <View style={[styles.CategoryContainer, styles.color5]}>
            <Text style={styles.categoryText}>Programming</Text>
          </View>
        </ScrollView>
      </View>

      <View style={{marginTop: 10, marginBottom: 10}}>
        <Text style={styles.categoryTitle}>Explore Now</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={[styles.edtechCard, styles.elevatedEdtechCard]}>
            <Image
              source={{
                uri: 'https://www.mathworks.com/discovery/reinforcement-learning/_jcr_content/mainParsys3/discoverysubsection/mainParsys/image.adapt.full.medium.png/1695031002183.png',
              }}
              style={styles.edtechcardImage}
            />
            <View style={styles.edtechcardbody}>
              <Text style={styles.edtechcardTitle}>
                Machine Learning
              </Text>
              <Text style={styles.edtechcardDescription} numberOfLines={2}>
                In this course you will learn machine learning from Basic to advanced with
                Practical approach.
              </Text>
            </View>
            <View style={styles.PodcastsfooterContainer}>
              <TouchableOpacity>
                <Text style={styles.edtechsocialLinks}>Register Now</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.edtechCard, styles.elevatedEdtechCard]}>
            <Image
              source={{
                uri: 'https://atwebsite.blob.core.windows.net/images/power-BI-768x432.png',
              }}
              style={styles.edtechcardImage}
            />
            <View style={styles.edtechcardbody}>
              <Text style={styles.edtechcardTitle}>
                Analytics with Power BI 
              </Text>
              <Text style={styles.edtechcardDescription} numberOfLines={2}>
                In this course you will learn NLP from Basic to advanced with
                Practical approach.
              </Text>
            </View>
            <View style={styles.PodcastsfooterContainer}>
              <TouchableOpacity>
                <Text style={styles.edtechsocialLinks}>Register Now</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.edtechCard, styles.elevatedEdtechCard]}>
            <Image
              source={{
                uri: 'https://cdn.analyticsvidhya.com/wp-content/uploads/2020/11/Untitled-design24.png',
              }}
              style={styles.edtechcardImage}
            />
            <View style={styles.edtechcardbody}>
              <Text style={styles.edtechcardTitle}>
                Python for Developers
              </Text>
              <Text style={styles.edtechcardDescription} numberOfLines={2}>
                In this course you will learn NLP from Basic to advanced with
                Practical approach.
              </Text>
            </View>
            <View style={styles.PodcastsfooterContainer}>
              <TouchableOpacity>
                <Text style={styles.edtechsocialLinks}>Register Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.edtechCard, styles.elevatedEdtechCard]}>
            <Image
              source={{
                uri: 'https://i.ytimg.com/vi/x0fSBAgBrOQ/maxresdefault.jpg',
              }}
              style={styles.edtechcardImage}
            />
            <View style={styles.edtechcardbody}>
              <Text style={styles.edtechcardTitle}>
                React JS Crash Course
              </Text>
              <Text style={styles.edtechcardDescription} numberOfLines={2}>
                In this course you will learn NLP from Basic to advanced with
                Practical approach.
              </Text>
            </View>
            <View style={styles.PodcastsfooterContainer}>
              <TouchableOpacity>
                <Text style={styles.edtechsocialLinks}>Register Now</Text>
              </TouchableOpacity>
            </View>
          </View>
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
              <TouchableOpacity>
                <Text style={styles.edtechsocialLinks}>Register Now</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.edtechCard, styles.elevatedEdtechCard]}>
            <Image
              source={{
                uri: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/excel_formulas.jpg',
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
              <TouchableOpacity>
                <Text style={styles.edtechsocialLinks}>Register Now</Text>
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
              <TouchableOpacity>
                <Text style={styles.edtechsocialLinks}>Register Now</Text>
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
              <TouchableOpacity>
                <Text style={styles.edtechsocialLinks}>Register Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>

      <View>

      </View>

      <View style={styles.ImageContainer}>
    <Image
      source={require('../assets/BottomImage.png')}
      style={styles.headerimage}
    />
  </View>
    </View>
  );
};

export default EdtechScreen;

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
  HeaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    height: 50,
    width: '90%',
    backgroundColor: '#5A20CB',
    marginHorizontal: 20,
    marginBottom: 12,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
  aboutEdtechContainer: {
    height: 180,
    width: 350,
    borderRadius: 6,
    backgroundColor: '#242B2E',
    margin: 12,
    marginHorizontal: 22,
    elevation: 20,
    shadowOpacity: {
      width: 1,
      height: 1,
    },
    shadowColor: 'blue',
  },
  aboutEdtechTitle: {
    marginHorizontal: 12,
    marginTop: 6,
  },
  aboutEtechBody: {
    margin: 12,
  },
  CategoryContainer: {
    height: 42,
    width: '100%',
    borderRadius: 6,
    // backgroundColor: "#FF6666",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
  },
  categoryText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 500,
  },
  categoryTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 600,
    marginHorizontal: 20,
  },
  color1: {
    backgroundColor: '#E6425E',
  },
  color2: {
    backgroundColor: '#51E1ED',
  },
  color3: {
    backgroundColor: '#50DBB4',
  },
  color4: {
    backgroundColor: '#EDC126',
  },
  color5: {
    backgroundColor: '#E6425E',
  },
  color6: {
    backgroundColor: '#E07C24',
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

  PodcastsfooterContainer: {
    padding: 8,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
