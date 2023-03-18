// this file make it easier to fetch and upload data to a data base...
import dashboard from '../assets/images/dashboard.png';
import memoryimg from '../assets/images/memory.png';

import place1 from "../assets/images/img1.webp";
import place2 from "../assets/images/img2.webp";
import place3 from "../assets/images/img3.webp";
import place4 from "../assets/images/img4.webp";
import place5 from "../assets/images/img5.jpg";
import place6 from "../assets/images/img6.webp";
import place7 from "../assets/images/img7.webp";
import place8 from "../assets/images/img8.webp";
import place9 from "../assets/images/img9.webp";
import place10 from "../assets/images/img10.webp";

import brand1 from "../assets/images/brand1.png";
import brand2 from "../assets/images/brand2.png";
import brand3 from "../assets/images/brand3.png";
import brand4 from "../assets/images/brand4.png";
import brand5 from "../assets/images/brand5.png";

import standardicon from "../assets/images/standardicon.png";
import preminumicon from "../assets/images/preminum.png";
import checkbox from "../assets/images/checkbox.svg";
import uncheckbox from "../assets/images/uncheckbox.svg";

export const hero = {
  'title':'The world is here...',
  'subTitle':'Where are You?',
  'text':'The true New Yorker secretly believes that people living anywhere else have to be, in some sense, kidding.”',
  'btn1':'Get Started',
  'btn2':'Explore',
  'img': dashboard,
}

export const navlinks = [
  {link: 'Home', id: 'home'},
  {link: 'About', id: 'about'},
  {link: 'Explore', id: 'explore'},
  {link: 'Pricing', id: 'pricing'},
  {link: 'Contract', id: 'contract'}
];

export const memory = {
  'title':'My Memories',
  'subtitle':'Come To Life Again',
  'text':'The gladdest moment in human life, methinks, is a departure into unknown lands',
  'img':memoryimg,
  'experience': [
    {'number':'10', 'title':'Years Experience'},
    {'number':'400', 'title':'Year Collaboration'},
    {'number':'30k+', 'title':'Happy Customer'},
  ]
};

export const placesAPI = [
  { "placeImg": place1, "location": "Lahore", "distance": "3.0 hour dirve" },
  { "placeImg": place2, "location": "Faisalabad", "distance": "2.5 hour dirve" },
  { "placeImg": place3, "location": "Multan", "distance": "4.7 hour drive" },
  { "placeImg": place4, "location": "Rawalpindi", "distance": "4 hour drive" },
  { "placeImg": place5, "location": "Islamabad", "distance": "4.9 hour drive" },
  { "placeImg": place6, "location": "Muree", "distance": "4.5 hour drive" },
  { "placeImg": place7, "location": "Nathia Gali", "distance": "5.5 hour drive" },
  { "placeImg": place8, "location": "Ayubia Gali", "distance": "5.1 hour drive" },
  { "placeImg": place9, "location": "Bhurban", "distance": "5.1 hour drive" },
  { "placeImg": place10, "location": "Gilgit", "distance": "5.1 hour drive" },
];

export const brands = [
  { iconSrc: brand1 },
  { iconSrc: brand2 },
  { iconSrc: brand3 },
  { iconSrc: brand4 },
  { iconSrc: brand5 },
];

export const pricingapi = {
  "title": "Choose The Plan That Suits You",
  "text": "Many attractive offers by becomming a premium member",
  "btn1": "Monthly",
  "btn2": "Yearly",
  "plans": [
    {
      "planicon": standardicon,
      "title": "Standard Membership",
      "text": "Suitable for all users",
      "plantype": "Free / Year",
      "plancontent": [
        { "iconbox": checkbox, "text": "Find Popular Destination" },
        { "iconbox": checkbox, "text": "Priority Booking Schedule" },
        { "iconbox": checkbox, "text": "Daily Destination News" },
        { "iconbox": uncheckbox, "text": "Invite Friends Feature" },
        { "iconbox": uncheckbox, "text": "Limited Travel Stats" },
        { "iconbox": uncheckbox, "text": "Invite Friends Feature" },
        { "iconbox": uncheckbox, "text": "No Ads & Tax" },
      ],
      "buttonText": "Get Free",
    },
    {
      "planicon": preminumicon,
      "title": "Preminum Membership",
      "text": "Suitable for enthusiast travelers",
      "plantype": "$60 / Year",
      "plancontent": [
        { "iconbox": checkbox, "text": "Find Popular Destination" },
        { "iconbox": checkbox, "text": "Priority Booking Schedule" },
        { "iconbox": checkbox, "text": "Daily Destination News" },
        { "iconbox": checkbox, "text": "Invite Friends Feature" },
        { "iconbox": checkbox, "text": "Advanced Travel Stats" },
        { "iconbox": checkbox, "text": "Invite Friends Feature" },
        { "iconbox": checkbox, "text": "No Ads & Tax" },
      ],
      "buttonText": "Get Started",
    },
  ],
};