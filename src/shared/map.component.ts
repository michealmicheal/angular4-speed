import { Component, OnChanges, OnInit, Input } from '@angular/core';
//import { } from '@types/googlemaps';

@Component({
    selector: 'acw-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})

export class MapComponent implements OnChanges, OnInit {
    private map: any;
    @Input() mapID: number;
    @Input() showMap: boolean;
    longitude: number = (Math.random() * 52) - 123;
    latitude: number = (Math.random() * 20) + 29;

    ngOnInit(): void {
        this.mapID += 1;
    }

    ngOnChanges(): void {
        if (this.showMap !== false) {
            this.createMap(this.mapID);
        }
    }
    createMap(myMap): void {
        if (typeof document.getElementById('placeholderID') !== 'undefined' && document.getElementById('placeholderID') !== null) {
            document.getElementById('placeholderID').setAttribute('id', myMap);
            this.map = new google.maps.Map(document.getElementById(myMap), {
                center: {lat: this.latitude, lng: this.longitude},
                zoom: 8
            });
        }
    }
}
