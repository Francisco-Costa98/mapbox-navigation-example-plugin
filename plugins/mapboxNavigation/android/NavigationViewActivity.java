package com.francisco.costa.easmapboxtbtexample;

import android.os.Bundle;
import androidx.annotation.CallSuper;
import com.facebook.react.ReactActivity;

/**
 * The example demonstrates how to inflate [NavigationView] using XML to render a complete
 * turn-by-turn experience.
 *
 * Before running the example make sure you have put your access_token in the correct place
 * inside [app-preview/src/main/res/values/mapbox_access_token.xml]. If not present then add
 * this file at the location mentioned above and add the following content to it
 *
 * <?xml version="1.0" encoding="utf-8"?>
 * <resources xmlns:tools="http://schemas.android.com/tools">
 *     <string name="mapbox_access_token"><PUT_YOUR_ACCESS_TOKEN_HERE></string>
 * </resources>
 *
 * The example uses replay location engine to facilitate navigation without physically moving.
 */
public class NavigationViewActivity extends  ReactActivity {

        @Override
        @CallSuper
        protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.mapbox_activity_navigation_view);
        }
}
