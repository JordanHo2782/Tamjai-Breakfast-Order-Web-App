import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';

import ChangeSettingButton from '../ChangeSettingButton/ChangeSettingButton'
import ChangeSettingManual from '../ChangeSettingManual/ChangeSettingManual';

import { faLocationArrow ,faLanguage, faUtensils, faChair } from '@fortawesome/free-solid-svg-icons'

export default function Mainpage() {
    class Word {
        constructor(EnglishWord, TraditionalChineseWord){
            this.EnglishWord = EnglishWord;
            this.TraditionalChineseWord = TraditionalChineseWord;
        }
        Translator(Language){
            if(Language==="English"){
                return this.EnglishWord;
            }
            if(Language==="Traditional Chinese"){
                return this.TraditionalChineseWord;
            }
        }
    }

    const English = new Word("English", "英文");
    const TraditionalChinese = new Word("Traditional Chinese", "繁體中文");
    const LanguageOptions = [English, TraditionalChinese];

    const [Language, setLanguage] = useState(LanguageOptions[0]);
    const [LanguageManualOpened, setLanguageManualOpened] = useState(false);

    const DineIn = new Word("Dine In", "堂食");
    const Takeaway = new Word("Takeaway", "外賣自取");
    const DineLocationOptions = [DineIn, Takeaway];
    const [DineLocation, setDineLocation] = useState(DineLocationOptions[0]);
    const [DineLocationManualOpened, setDineLocationManualOpened] = useState(false);

    const [RestaurantOptions, setRestaurantOptions] = useState([new Word('Jaffe Road, Causeway Bay','銅鑼灣謝斐道')])
    
    const [Restaurant, setRestaurant] = useState(RestaurantOptions[0]);
    const [RestaurantID, setRestaurantID] = useState(1);
    const [RestaurantManualOpened, setRestaurantManualOpened] = useState(false);

    const [SitNumberArray, setSitNumberArray] = useState([44])
    const [SitNumberOptions, setSitNumberOptions] = useState(Array.from({length: SitNumberArray[0]}, (v, i) => i+1))
    const [SitNumber, setSitNumber] = useState(1)
    const [SitNumberManaulOpened, setSitNumberManualOpened] = useState(false)

    const FindElementInArrayByProperty = (Arr, Property)=>{
        return Arr.filter((Element)=>{
            return Element.EnglishWord===Property||Element.TraditionalChineseWord===Property;
        })[0]
    }
    
    const onStartOrder = ()=>{
        const TamjaiYunnanMixianOrderInfo = JSON.stringify({
            restaurant_name: Restaurant.EnglishWord,
            restaurant_id: RestaurantID,
            dine_location: DineLocation.EnglishWord,
            sit_number: SitNumber,
        })
        localStorage.setItem('TamjaiYunnanMixianOrderInfo', TamjaiYunnanMixianOrderInfo)
        window.location.href = "/product-categories"
    }

    useEffect(()=>{
        const FetchRestaurant = async()=>{
            const RestaurantObjectsFetched = await fetch('/api/get/restaurants/').then((res)=>{return res.json()});
            const NewRestaurantOptions = RestaurantObjectsFetched.map((RestaurantObject)=>{
                return new Word(RestaurantObject.english_name, RestaurantObject.traditional_chinese_name);
            });
            setRestaurantOptions(NewRestaurantOptions);
            SitNumberArray.pop();
            RestaurantObjectsFetched.map((RestaurantObject)=>{
                SitNumberArray.push(RestaurantObject.sit_number)
            });//SitNumberArray

            const onGetCurrentLocationSucess = async(pos)=>{
                const CoordinatesArray = RestaurantObjectsFetched.map((RestaurantObject)=>{
                    return {
                        x_coordinate: RestaurantObject.x_coordinate,
                        y_coordinate: RestaurantObject.y_coordinate,
                    }
                })
                const DistancesArray = CoordinatesArray.map((Coordinate)=>{
                    const deg2rad = (deg)=>{
                        return deg * (Math.PI/180)
                    }
                    const R = 6371;
                    const CurrentLatitude = pos.coords.latitude;
                    const CurrentLongitude = pos.coords.longitude;
                    var dLat = deg2rad(CurrentLatitude-Coordinate.x_coordinate);
                    var dLon = deg2rad(CurrentLongitude-Coordinate.y_coordinate);
                    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +Math.cos(deg2rad(Coordinate.x_coordinate)) * Math.cos(deg2rad(CurrentLatitude)) * Math.sin(dLon/2) * Math.sin(dLon/2);
                    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                    var d = R * c;
                    return d; //distance in km
                })
                const RestaurantIndex = DistancesArray.indexOf(Math.min.apply(null, DistancesArray))
                setSitNumberOptions(Array.from({length: SitNumberArray[RestaurantIndex]}, (v, i) => i+1))
                setRestaurant(NewRestaurantOptions[RestaurantIndex])
                setRestaurantID(RestaurantIndex+1)
            }
            const onGetCurrentLocationFailure = ()=>{
                setSitNumberOptions(Array.from({length: 44}, (v, i) => i+1))
            }
            navigator.geolocation.getCurrentPosition(onGetCurrentLocationSucess, onGetCurrentLocationFailure);
        }
        FetchRestaurant();
    }, [])

    return (
        <div className="h-100 w-100">
            <div className="h-100 w-100 position-absolute z-index-1 opacity-2 full-bg-image tamjainoodles-bg-image">
            </div>
            <div className="h-100 w-100 position-absolute d-flex flex-column align-items-center z-index-2">
                <div className="tamjailogo-size full-bg-image tamjailogo-bg-image"></div>
                <ChangeSettingButton
                    Icon={faLocationArrow} 
                    Label={"Restaurant"}
                    OptionSelected={Restaurant.Translator(Language.EnglishWord)}
                    onChangeSettingButtonChange={()=>{
                        setRestaurantManualOpened(true)
                }}/>
                <ChangeSettingButton
                    Icon={faUtensils} 
                    Label={"Dine Location"}
                    OptionSelected={DineLocation.Translator(Language.EnglishWord)}
                    onChangeSettingButtonChange={()=>{
                        setDineLocationManualOpened(true)
                }}/>
                <ChangeSettingButton
                    Icon={faChair} 
                    Label={"Sit Number"}
                    OptionSelected={SitNumber}
                    onChangeSettingButtonChange={()=>{
                        setSitNumberManualOpened(true)}}
                    Style={DineLocation.EnglishWord==="Takeaway"?{visibility: "hidden"}:{visibility: "visible"}}
                />
                <button 
                    type="button" 
                    className="btn btn-outline-primary my-5 d-flex justify-content-between align-items-center"
                    onClick={onStartOrder}>
                    {"Start Order"}
                </button>
            </div>
            <div className={`w-100 position-absolute justify-content-center align-items-center bg-dark z-index-3 opacity-5 d-flex menu-transition ${LanguageManualOpened||DineLocationManualOpened||RestaurantManualOpened||SitNumberManaulOpened?"menu-opened-margin":"menu-closed-margin"}`}/>
            {/* <ChangeSettingManual
                Label={new Word("Language", "語言").Translator(Language.EnglishWord)}
                Options={LanguageOptions.map((Option)=>{
                    return Option.Translator(Language.EnglishWord)
                })}
                OptionSelected={Language.Translator(Language.EnglishWord)}
                onSettingChange={(newOptionPropertySelected)=>{
                    const newOptionSelected = FindElementInArrayByProperty(LanguageOptions, newOptionPropertySelected)
                    newOptionPropertySelected==="English"||newOptionPropertySelected==="英文"?document.title="Welcome to Tamjai Yunnan Mixian":document.title="譚仔雲南米線在此落單";
                    setLanguage(newOptionSelected);
                    setLanguageManualOpened(false);
                }}
                ManualOpened={LanguageManualOpened}
                SearchLabel={Language.EnglishWord==="English"?"Search Here":"在此搜尋"}
            /> */}
            <ChangeSettingManual
                Label={"Restaurant"}
                Options={
                    RestaurantOptions.map((Option)=>{
                        return Option.Translator(Language.EnglishWord)
                    })
                }
                OptionSelected={Restaurant.Translator(Language.EnglishWord)}
                onSettingChange={(newOptionPropertySelected)=>{
                    const newOptionSelected = FindElementInArrayByProperty(RestaurantOptions, newOptionPropertySelected);
                    const RestaurantIndex = RestaurantOptions.findIndex((Option)=>{
                        return Option.EnglishWord===newOptionPropertySelected||Option.TraditionalChineseWord===newOptionPropertySelected;
                    })
                    setRestaurant(newOptionSelected);
                    setSitNumberOptions(Array.from({length: SitNumberArray[RestaurantIndex]}, (v, i) => i+1));
                    setSitNumber(1);
                    setRestaurantManualOpened(false);
                }}
                ManualOpened={RestaurantManualOpened}
                SearchLabel={"Search Here"}
            />
            <ChangeSettingManual
                Label={"Dine Location"}
                Options={
                    DineLocationOptions.map((Option)=>{
                        return Option.Translator(Language.EnglishWord)
                    })
                }
                OptionSelected={DineLocation.Translator(Language.EnglishWord)}
                onSettingChange={(newOptionPropertySelected)=>{
                    const newOptionSelected = FindElementInArrayByProperty(DineLocationOptions, newOptionPropertySelected);
                    newOptionPropertySelected==="Takeaway"||newOptionPropertySelected==="外賣自取"?setSitNumber(NaN):setSitNumber(1);
                    setDineLocation(newOptionSelected);
                    setDineLocationManualOpened(false);
                }}
                ManualOpened={DineLocationManualOpened}
                SearchLabel={"Search Here"}
            />

            <ChangeSettingManual
                Label={"Sit Number"}
                Options={SitNumberOptions}
                OptionSelected={SitNumber}
                onSettingChange={(newOptionPropertySelected)=>{
                    setSitNumber(newOptionPropertySelected);
                    setSitNumberManualOpened(false);
                }}
                ManualOpened={SitNumberManaulOpened}
                SearchLabel={"Search Here"}
            />
        </div>
    )
}
