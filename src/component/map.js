import { Map } from '@googlemaps/react-wrapper'

function MyApp() {
  return (
    <div>
      <Map
  apiKey="AIzaSyDV_Av5fSIq60cwJeVpQTR9VCjDgtsYYnI"
  defaultZoom={8}
  defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
//   defaultOptions={{ styles: customMapStyles, disableDefaultUI: true }}
/>

    </div>
  )
}

export default MyApp
