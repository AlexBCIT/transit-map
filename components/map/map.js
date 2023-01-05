import 'leaflet/dist/leaflet.css'
// import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

export default function Map() {

    const position = [49.28594, -123.11129];

    const purpleOption = { color: 'purple' };
    const orangeOption = { color: 'orange' };
    const redOption = { color: 'red' };

    // const polyline = [
    //     [49.28594, -123.11129],
    //     [49.28250, -123.11865],
    //     [49.27450, -123.12189]
    // ]

    // Waterfront to Scott Road
    const waterfront = [49.28594, -123.11129]
    const burrard = [49.28250, -123.11865]
    const granville = [49.27450, -123.12189]
    const stadium = [49.28010484687972, -123.11012142014103]
    const main = [49.273374980784865, -123.10037145876296]
    const commercial = [49.262721001091556, -123.06927941643552]
    const nanaimo = [49.24844626535717, -123.05598167410812]
    const twentyNinth = [49.24436337925635, -123.04537402992739]
    const joyce = [49.23855530902799, -123.0317256145831]
    const patterson = [49.22991271599505, -123.01265107225555]
    const metrotown = [49.22593989446889, -123.00385127225569]
    const royal = [49.220193228996386, -122.98845204229738]
    const edmonds = [49.21254265709066, -122.95914504342]
    const twentySecond = [49.200068725477024, -122.94922489130668]
    const newWest = [49.20159918383558, -122.91263972992837]
    const columbia = [49.204943945073374, -122.90607708574763]
    const scott = [49.204575904842045, -122.87402738018886]
    const gateway = [49.1991136014707, -122.85066387225632]
    const surrey = [49.18971392944762, -122.84792071458409]
    const king = [49.1829310367517, -122.84473292807587]

    // Sapperton to Production Way
    const sapperton = [49.224860238697396, -122.88949270294468]
    const braid = [49.23268213068468, -122.88456287225554]
    const lougheed = [49.24875892482227, -122.89717730665]
    const production = [49.25367827613695, -122.91868207173422]

    const kingLine = [
        waterfront,
        burrard,
        granville,
        stadium,
        main,
        commercial,
        nanaimo,
        twentyNinth,
        joyce,
        patterson,
        metrotown,
        royal,
        edmonds,
        twentySecond,
        newWest,
        columbia,
        scott,
        gateway,
        surrey,
        king
    ]

    const productionLine = [
        columbia,
        sapperton,
        braid,
        lougheed,
        production
    ]

    return (
        <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Markers for Waterfront - King George */}
            <Marker position={waterfront}>
                <Popup>
                    Skytrain. <br /> Waterfront.
                </Popup>
            </Marker>
            <Marker position={burrard}>
                <Popup>
                    Skytrain. <br /> Burrard.
                </Popup>
            </Marker>
            <Marker position={granville}>
                <Popup>
                    Skytrain. <br /> Granville.
                </Popup>
            </Marker>
            <Marker position={stadium}>
                <Popup>
                    Skytrain. <br /> Stadium Chinatown.
                </Popup>
            </Marker>
            <Marker position={main}>
                <Popup>
                    Skytrain. <br /> Main Street Science World.
                </Popup>
            </Marker>
            <Marker position={commercial}>
                <Popup>
                    Skytrain. <br /> Commercial Broadway.
                </Popup>
            </Marker>
            <Marker position={nanaimo}>
                <Popup>
                    Skytrain. <br /> Nanaimo.
                </Popup>
            </Marker>
            <Marker position={twentySecond}>
                <Popup>
                    Skytrain. <br /> 22nd Avenue.
                </Popup>
            </Marker>
            <Marker position={joyce}>
                <Popup>
                    Skytrain. <br /> Joyce Collingwood.
                </Popup>
            </Marker>
            <Marker position={patterson}>
                <Popup>
                    Skytrain. <br /> Patterson.
                </Popup>
            </Marker>
            <Marker position={metrotown}>
                <Popup>
                    Skytrain. <br /> Metrotown
                </Popup>
            </Marker>
            <Marker position={royal}>
                <Popup>
                    Skytrain. <br /> Royal Oak
                </Popup>
            </Marker>
            <Marker position={edmonds}>
                <Popup>
                    Skytrain. <br /> Edmonds
                </Popup>
            </Marker>
            <Marker position={twentySecond}>
                <Popup>
                    Skytrain. <br /> 22nd Street
                </Popup>
            </Marker>
            <Marker position={newWest}>
                <Popup>
                    Skytrain. <br /> New Westminster
                </Popup>
            </Marker>
            <Marker position={columbia}>
                <Popup>
                    Skytrain. <br /> Columbia
                </Popup>
            </Marker>
            <Marker position={scott}>
                <Popup>
                    Skytrain. <br /> Scott Road
                </Popup>
            </Marker>
            <Marker position={gateway}>
                <Popup>
                    Skytrain. <br /> Gateway
                </Popup>
            </Marker>
            <Marker position={surrey}>
                <Popup>
                    Skytrain. <br /> Surrey Central
                </Popup>
            </Marker>
            <Marker position={king}>
                <Popup>
                    Skytrain. <br /> King George
                </Popup>
            </Marker>

            {/* Markers for Sapperton - Production Way University */}
            <Marker position={sapperton}>
                <Popup>
                    Skytrain. <br /> Sapperton
                </Popup>
            </Marker>
            <Marker position={braid}>
                <Popup>
                    Skytrain. <br /> Braid
                </Popup>
            </Marker>
            <Marker position={lougheed}>
                <Popup>
                    Skytrain. <br /> Lougheed
                </Popup>
            </Marker>
            <Marker position={production}>
                <Popup>
                    Skytrain. <br /> Production Way-University
                </Popup>
            </Marker>

            <CircleMarker center={king} pathOptions={redOption} radius={20}>
                <Popup>You Reached Your Destination *__* </Popup>
            </CircleMarker>

            <CircleMarker center={waterfront} pathOptions={redOption} radius={20}>
                <Popup>You Reached Your Destination *__* </Popup>
            </CircleMarker>

            <CircleMarker center={production} pathOptions={redOption} radius={20}>
                <Popup>You Reached Your Destination *__* </Popup>
            </CircleMarker>

            <Polyline pathOptions={purpleOption} positions={kingLine} />
            <Polyline pathOptions={redOption} positions={productionLine} />
        </MapContainer>
    )
}