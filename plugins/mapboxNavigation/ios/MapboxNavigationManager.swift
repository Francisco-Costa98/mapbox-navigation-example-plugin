import UIKit
import MapboxDirections
import MapboxCoreNavigation
import MapboxNavigation
import CoreLocation

@objc(MapboxNavigation)
class MapboxNavigationClass: NSObject {
  
@objc
func navigateToExample() {
 
// Define two waypoints to travel between
let origin = Waypoint(coordinate: CLLocationCoordinate2D(latitude: 38.9131752, longitude: -77.0324047), name: "Mapbox")
let destination = Waypoint(coordinate: CLLocationCoordinate2D(latitude: 38.8977, longitude: -77.0365), name: "White House")
// Set options
let routeOptions = NavigationRouteOptions(waypoints: [origin, destination])
 
// Request a route using MapboxDirections.swift
Directions.shared.calculate(routeOptions) { (session, result) in
switch result {
			case .failure(let error):
			print(error.localizedDescription)
			case .success(let response):
			
			// Pass the first generated route to the the NavigationViewController
			let viewController = NavigationViewController(for: response, routeIndex: 0, routeOptions: routeOptions)
			let appDelegate = UIApplication.shared.delegate
			appDelegate!.window!!.rootViewController!.present(viewController, animated: true, completion: nil)
			}
		}
	}
  
@objc
static func requiresMainQueueSetup() -> Bool {
    return true
  }
}