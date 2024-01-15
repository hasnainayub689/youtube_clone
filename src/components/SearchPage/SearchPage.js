import React from 'react';
import './SearchPage.css';
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from '../ChannelRow/ChannelRow';
import VideoRow from '../VideoRow/VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://imgix.bustle.com/nylon/18430972/origin.jpg?w=1200&h=1000&fit=crop&crop=faces&auto=format%2Ccompress"
                channel="ILLENIUM"
                verified
                subs="946K"
                noOfVideos={209}
                description="PRE-SAVE MY NEW ALBUM 'ILLENIUM'"
            />
            <hr />
            <VideoRow
                views="5.8M views"
                subs="946K"
                description="The official YouTube Channel for ILLENIUM"
                timestamp="3:42"
                channel="ILLENIUM"
                title="ILLENIUM - Nightlight (Official Music Video)"
                image="https://i.ytimg.com/vi/jTRZqjl2JYI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1y6ozrdzqUjTJy6T9h9daUZoLIQ"
            />
            <VideoRow
                views="4.9M views"
                subs="946K"
                description=""
                timestamp="1 year ago"
                channel="ILLENIUM"
                title="ILLENIUM & Skylar Grey - From the Ashes (Official Lyric Video)"
                image="https://i.ytimg.com/vi/iIz17uVwkVU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCaNwmP9YoJbUZUhgc7MSlryt2qsA"
            />
            <VideoRow
                views="1.3M views"
                subs="946K"
                description="The official YouTube Channel for ILLENIUM"
                timestamp="1 year ago"
                channel="ILLENIUM"
                title="ILLENIUM & MAX - Worst Day (Official Music Video)"
                image="https://i.ytimg.com/vi/rDQV94pbbwc/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCwlSDITiddb_wuI_VjpDi_ZIw3Cg"
            />
            <VideoRow
                views="31M views"
                subs="946K"
                description="The official YouTube Channel for ILLENIUM"
                timestamp="4 years ago"
                channel="ILLENIUM"
                title="ILLENIUM, Jon Bellion - Good Things Fall Apart"
                image="https://i.ytimg.com/vi/XpmeVNxZ-Ks/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxpkyoa8YCSYQ6g0ufGqWzWggcPw"
            />
            <VideoRow
                views="9.2M views"
                subs="946K"
                description="The official YouTube Channel for ILLENIUM"
                timestamp="3 years ago"
                channel="ILLENIUM"
                title="ILLENIUM - Nightlight (Official Audio)"
                image="https://i.ytimg.com/vi/klp-RReW0jY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJBDWZo9tpPaLb5lYYTdBJYrFDZw"
            />
            <VideoRow
                views="2.3M views"
                subs="946K"
                description="The official YouTube Channel for ILLENIUM"
                timestamp="3 years ago"
                channel="ILLENIUM"
                title="ILLENIUM and Dabin Feat. Lights - Hearts On Fire (Official Lyric Video)"
                image="https://i.ytimg.com/vi/NauAmACgNSs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLANtcoL7bhqEZqA66f8xl53Shfnfg"
            />
            {/* Duplicate  */}

            <VideoRow
                views="5.8M views"
                subs="946K"
                description="The official YouTube Channel for ILLENIUM"
                timestamp="3:42"
                channel="ILLENIUM"
                title="ILLENIUM - Nightlight (Official Music Video)"
                image="https://i.ytimg.com/vi/jTRZqjl2JYI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1y6ozrdzqUjTJy6T9h9daUZoLIQ"
            />
            <VideoRow
                views="4.9M views"
                subs="946K"
                description=""
                timestamp="1 year ago"
                channel="ILLENIUM"
                title="ILLENIUM & Skylar Grey - From the Ashes (Official Lyric Video)"
                image="https://i.ytimg.com/vi/iIz17uVwkVU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCaNwmP9YoJbUZUhgc7MSlryt2qsA"
            />
            <VideoRow
                views="1.3M views"
                subs="946K"
                description="The official YouTube Channel for ILLENIUM"
                timestamp="1 year ago"
                channel="ILLENIUM"
                title="ILLENIUM & MAX - Worst Day (Official Music Video)"
                image="https://i.ytimg.com/vi/rDQV94pbbwc/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCwlSDITiddb_wuI_VjpDi_ZIw3Cg"
            />
            <VideoRow
                views="31M views"
                subs="946K"
                description="The official YouTube Channel for ILLENIUM"
                timestamp="4 years ago"
                channel="ILLENIUM"
                title="ILLENIUM, Jon Bellion - Good Things Fall Apart"
                image="https://i.ytimg.com/vi/XpmeVNxZ-Ks/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxpkyoa8YCSYQ6g0ufGqWzWggcPw"
            />
            <VideoRow
                views="9.2M views"
                subs="946K"
                description="The official YouTube Channel for ILLENIUM"
                timestamp="3 years ago"
                channel="ILLENIUM"
                title="ILLENIUM - Nightlight (Official Audio)"
                image="https://i.ytimg.com/vi/klp-RReW0jY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJBDWZo9tpPaLb5lYYTdBJYrFDZw"
            />
            <VideoRow
                views="2.3M views"
                subs="946K"
                description="The official YouTube Channel for ILLENIUM"
                timestamp="3 years ago"
                channel="ILLENIUM"
                title="ILLENIUM and Dabin Feat. Lights - Hearts On Fire (Official Lyric Video)"
                image="https://i.ytimg.com/vi/NauAmACgNSs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLANtcoL7bhqEZqA66f8xl53Shfnfg"
            />
            {/* Duplicate  */}

            <VideoRow
                views="5.8M views"
                subs="946K"
                description="The official YouTube Channel for ILLENIUM"
                timestamp="3:42"
                channel="ILLENIUM"
                title="ILLENIUM - Nightlight (Official Music Video)"
                image="https://i.ytimg.com/vi/jTRZqjl2JYI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1y6ozrdzqUjTJy6T9h9daUZoLIQ"
            />
            <VideoRow
                views="4.9M views"
                subs="946K"
                description=""
                timestamp="1 year ago"
                channel="ILLENIUM"
                title="ILLENIUM & Skylar Grey - From the Ashes (Official Lyric Video)"
                image="https://i.ytimg.com/vi/iIz17uVwkVU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCaNwmP9YoJbUZUhgc7MSlryt2qsA"
            />
            <VideoRow
                views="1.3M views"
                subs="946K"
                description="The official YouTube Channel for ILLENIUM"
                timestamp="1 year ago"
                channel="ILLENIUM"
                title="ILLENIUM & MAX - Worst Day (Official Music Video)"
                image="https://i.ytimg.com/vi/rDQV94pbbwc/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCwlSDITiddb_wuI_VjpDi_ZIw3Cg"
            />
            <VideoRow
                views="31M views"
                subs="946K"
                description="The official YouTube Channel for ILLENIUM"
                timestamp="4 years ago"
                channel="ILLENIUM"
                title="ILLENIUM, Jon Bellion - Good Things Fall Apart"
                image="https://i.ytimg.com/vi/XpmeVNxZ-Ks/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxpkyoa8YCSYQ6g0ufGqWzWggcPw"
            />
            <VideoRow
                views="9.2M views"
                subs="946K"
                description="The official YouTube Channel for ILLENIUM"
                timestamp="3 years ago"
                channel="ILLENIUM"
                title="ILLENIUM - Nightlight (Official Audio)"
                image="https://i.ytimg.com/vi/klp-RReW0jY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJBDWZo9tpPaLb5lYYTdBJYrFDZw"
            />
            <VideoRow
                views="2.3M views"
                subs="946K"
                description="The official YouTube Channel for ILLENIUM"
                timestamp="3 years ago"
                channel="ILLENIUM"
                title="ILLENIUM and Dabin Feat. Lights - Hearts On Fire (Official Lyric Video)"
                image="https://i.ytimg.com/vi/NauAmACgNSs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLANtcoL7bhqEZqA66f8xl53Shfnfg"
            />
        </div>
    );
}

export default SearchPage;
