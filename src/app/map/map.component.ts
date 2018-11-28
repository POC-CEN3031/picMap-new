import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  // google maps zoom level
  zoom: number = 5;
  
  // initial center position for the map
  lat: number = 29.641160;
  lng: number = -82.355326;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 29.647180,
		  lng:  -82.328408,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 27.997831,
		  lng:  -81.428205,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 30.394529,
		  lng:  -83.532303,
		  label: 'C',
		  draggable: true
	  }
  ]
  constructor() {
    
   }

  ngOnInit() {
    
  }

}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
